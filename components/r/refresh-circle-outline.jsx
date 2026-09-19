import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1h_8isxf.css';
import '../../css/e/eu7dfbmgb.css';
import '../../css/q/q-tflgzje.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1h_8isxf"/><path class="eu7dfbmgb"/><path class="q-tflgzje"/>`,
		"fallback": "ion:refresh-circle-outline",
	});
}

export default Component;
