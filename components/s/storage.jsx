import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ume5d43jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ume5d43jk"/>`,
		"fallback": "grommet-icons:storage",
	});
}

export default Component;
