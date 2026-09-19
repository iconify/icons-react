import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhtifodgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhtifodgo"/>`,
		"fallback": "covid:symptoms-virus-lung-damage",
	});
}

export default Component;
