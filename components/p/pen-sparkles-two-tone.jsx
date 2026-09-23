import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zgwutpbmz.css';
import '../../css/t/t2f0xziff.css';
import '../../css/e/eq5qdjq0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zgwutpbmz"/><path class="t2f0xziff"/><path class="eq5qdjq0k"/></g>`,
		"fallback": "keyline-icons:pen-sparkles-two-tone",
	});
}

export default Component;
