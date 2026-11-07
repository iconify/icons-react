import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_xfbhytv.css';
import '../../css/t/t5sicqsen.css';
import '../../css/u/u1-hubbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n_xfbhytv"/><path class="t5sicqsen"/><path class="u1-hubbrp"/>`,
		"fallback": "solar:washing-machine-outline",
	});
}

export default Component;
