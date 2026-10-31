import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv32cr-lw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv32cr-lw"/>`,
		"fallback": "coolicons:train-fill-round",
	});
}

export default Component;
