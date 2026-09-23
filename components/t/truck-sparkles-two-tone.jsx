import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j8qjnpb3j.css';
import '../../css/t/t2f0xziff.css';
import '../../css/t/t6673hbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j8qjnpb3j"/><path class="t2f0xziff"/><path class="t6673hbrx"/></g>`,
		"fallback": "keyline-icons:truck-sparkles-two-tone",
	});
}

export default Component;
