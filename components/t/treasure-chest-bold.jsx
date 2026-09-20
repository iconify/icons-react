import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4wjecb2i.css';
import '../../css/i/ipe7-acuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4wjecb2i"/><path class="ipe7-acuw"/>`,
		"fallback": "streamline-ultimate:treasure-chest-bold",
	});
}

export default Component;
