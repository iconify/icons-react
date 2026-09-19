import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vqeqzrb1o.css';
import '../../css/k/k-v1gmb1a.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vqeqzrb1o"/><path class="k-v1gmb1a"/></g>`,
		"fallback": "fad:logo-juce",
	});
}

export default Component;
