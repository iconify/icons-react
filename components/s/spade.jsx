import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqk6_tbcl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqk6_tbcl"/>`,
		"fallback": "pinhead:spade",
	});
}

export default Component;
