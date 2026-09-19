import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cu8-jub8h.css';
import '../../css/m/m0eb90q8b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cu8-jub8h"/><path class="m0eb90q8b"/>`,
		"fallback": "garden:speech-bubble-lightning-bolt-stroke-12",
	});
}

export default Component;
