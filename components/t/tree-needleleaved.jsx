import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gky2je_zi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gky2je_zi"/>`,
		"fallback": "temaki:tree-needleleaved",
	});
}

export default Component;
