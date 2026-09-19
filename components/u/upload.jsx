import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qozm8rbwi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qozm8rbwi"/>`,
		"fallback": "fluent-mdl2:upload",
	});
}

export default Component;
