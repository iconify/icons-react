import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av0tnr0ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av0tnr0ll"/>`,
		"fallback": "grommet-icons:link-up",
	});
}

export default Component;
