import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r482a7max.css';
import '../../css/k/kr-9jkbii.css';
import '../../css/i/iyzleyb_j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r482a7max"/><path class="kr-9jkbii"/><path class="iyzleyb_j"/>`,
		"fallback": "carbon:qc-launch",
	});
}

export default Component;
