import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvssf56jv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvssf56jv"/>`,
		"fallback": "garden:speech-bubble-lightning-bolt-fill-12",
	});
}

export default Component;
