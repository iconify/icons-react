import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cvq-p1amc.css';
import '../../css/v/vzaix_cqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cvq-p1amc"/><path class="vzaix_cqp"/></g>`,
		"fallback": "streamline-sharp:satellite-dish",
	});
}

export default Component;
