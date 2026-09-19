import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/occxhccgf.css';
import '../../css/m/mxusxgb2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="occxhccgf"/><path class="mxusxgb2n"/>`,
		"fallback": "carbon:policy",
	});
}

export default Component;
