import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8gg70jax.css';
import '../../css/i/ihap6s9si.css';
import '../../css/l/l0t3xkb6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8gg70jax"/><path class="ihap6s9si"/><path clip-rule="evenodd" class="l0t3xkb6j"/>`,
		"fallback": "streamline-freehand:voice-id-smartphone",
	});
}

export default Component;
