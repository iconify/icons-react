import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q25l8gb6x.css';
import '../../css/y/yac-066cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q25l8gb6x"/><path class="yac-066cb"/>`,
		"fallback": "streamline-ultimate:phone-action-location-1-bold",
	});
}

export default Component;
