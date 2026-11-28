import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s7jlmkqhz.css';
import '../../css/q/qkug0ezsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s7jlmkqhz"/><path class="qkug0ezsx"/></g>`,
		"fallback": "lucide:upload-cloud",
	});
}

export default Component;
