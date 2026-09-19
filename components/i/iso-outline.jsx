import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qiv05cixr.css';
import '../../css/w/w1voi0bfp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qiv05cixr"/><path class="w1voi0bfp"/>`,
		"fallback": "carbon:iso-outline",
	});
}

export default Component;
