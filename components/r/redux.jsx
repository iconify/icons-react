import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeae1zb8m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeae1zb8m"/>`,
		"fallback": "devicon:redux",
	});
}

export default Component;
