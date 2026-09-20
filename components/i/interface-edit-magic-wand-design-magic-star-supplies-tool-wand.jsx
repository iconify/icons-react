import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d276rnbyu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d276rnbyu"/>`,
		"fallback": "streamline:interface-edit-magic-wand-design-magic-star-supplies-tool-wand",
	});
}

export default Component;
