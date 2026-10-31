import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2_bmgbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2_bmgbga"/>`,
		"fallback": "coolicons:radio-checked-round",
	});
}

export default Component;
