import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neold9btb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neold9btb"/>`,
		"fallback": "selfhst:microsoft-powerpoint-2018-dark",
	});
}

export default Component;
