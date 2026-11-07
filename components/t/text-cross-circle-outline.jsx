import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1bvnqfvt.css';
import '../../css/m/m4styj0nb.css';
import '../../css/m/mz1do-bvr.css';
import '../../css/q/q1sggqbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1bvnqfvt"/><path class="m4styj0nb"/><path class="mz1do-bvr"/><path clip-rule="evenodd" class="q1sggqbkg"/>`,
		"fallback": "solar:text-cross-circle-outline",
	});
}

export default Component;
