import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-uab2czj.css';
import '../../css/p/pphyynu_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-uab2czj"/><path class="pphyynu_z"/>`,
		"fallback": "streamline-ultimate:truck-2-bold",
	});
}

export default Component;
