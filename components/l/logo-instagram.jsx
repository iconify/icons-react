import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlr4lquzx.css';
import '../../css/v/vdsszm8qt.css';
import '../../css/f/fheposbhp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nlr4lquzx"/><path class="vdsszm8qt"/><path class="fheposbhp"/>`,
		"fallback": "carbon:logo-instagram",
	});
}

export default Component;
