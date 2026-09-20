import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw8y_lyiw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw8y_lyiw"/>`,
		"fallback": "pinhead:steel-square-and-drafting-compass",
	});
}

export default Component;
