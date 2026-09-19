import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkaoz6bjf.css';
import '../../css/o/oztuellfc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkaoz6bjf"/><path class="oztuellfc"/>`,
		"fallback": "carbon:train-ticket",
	});
}

export default Component;
