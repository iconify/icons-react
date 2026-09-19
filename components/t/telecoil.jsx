import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp3oixb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp3oixb8k"/>`,
		"fallback": "guidance:telecoil",
	});
}

export default Component;
