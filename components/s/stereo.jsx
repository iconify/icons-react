import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am1rs2ilz.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am1rs2ilz"/>`,
		"fallback": "fad:stereo",
	});
}

export default Component;
