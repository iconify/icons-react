import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rawlm3oon.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rawlm3oon"/>`,
		"fallback": "fa6-solid:star-half",
	});
}

export default Component;
