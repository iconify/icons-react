import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv2cl-bjj.css';

const viewBox = {"width":1026,"height":641};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv2cl-bjj"/>`,
		"fallback": "whh:planet",
	});
}

export default Component;
