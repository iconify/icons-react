import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mit5f8bas.css';
import '../../css/e/ek_6wsbdj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mit5f8bas"/><path class="ek_6wsbdj"/>`,
		"fallback": "carbon:rain-heavy",
	});
}

export default Component;
