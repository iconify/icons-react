import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh92hhbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh92hhbmw"/>`,
		"fallback": "grommet-icons:sign",
	});
}

export default Component;
