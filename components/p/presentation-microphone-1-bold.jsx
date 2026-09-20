import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o00euybwi.css';
import '../../css/t/togjpqbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o00euybwi"/><path class="togjpqbhg"/>`,
		"fallback": "streamline-ultimate:presentation-microphone-1-bold",
	});
}

export default Component;
