import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q141z3jxg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q141z3jxg"/>`,
		"fallback": "f7:shield-fill",
	});
}

export default Component;
