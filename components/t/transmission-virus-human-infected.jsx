import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clkb5-fug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clkb5-fug"/>`,
		"fallback": "covid:transmission-virus-human-infected",
	});
}

export default Component;
