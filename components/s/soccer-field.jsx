import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3v-074nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3v-074nq"/>`,
		"fallback": "mdi:soccer-field",
	});
}

export default Component;
