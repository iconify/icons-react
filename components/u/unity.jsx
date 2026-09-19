import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmm9_6bsx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmm9_6bsx"/>`,
		"fallback": "devicon-plain:unity",
	});
}

export default Component;
