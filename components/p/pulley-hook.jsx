import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smi51_bqc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smi51_bqc"/>`,
		"fallback": "game-icons:pulley-hook",
	});
}

export default Component;
