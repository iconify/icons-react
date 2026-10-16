import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmd-k42xk.css';
import '../../css/g/gbbj8_bmz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmd-k42xk"/><path class="gbbj8_bmz"/>`,
		"fallback": "energy-icons:smart-speaker-48-bold",
	});
}

export default Component;
