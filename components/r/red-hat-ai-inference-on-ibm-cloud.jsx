import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8_e15b-a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8_e15b-a"/>`,
		"fallback": "carbon:red-hat-ai-inference-on-ibm-cloud",
	});
}

export default Component;
