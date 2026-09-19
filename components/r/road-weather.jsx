import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq7dzc16m.css';
import '../../css/e/e_cwsjbhd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq7dzc16m"/><path class="e_cwsjbhd"/>`,
		"fallback": "carbon:road-weather",
	});
}

export default Component;
