import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxqj9naah.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxqj9naah"/>`,
		"fallback": "devicon-plain:packer",
	});
}

export default Component;
