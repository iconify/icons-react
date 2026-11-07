import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivgsmkbsz.css';
import '../../css/u/uto2arb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivgsmkbsz"/><path clip-rule="evenodd" class="uto2arb3x"/>`,
		"fallback": "solar:minimize-square-3-bold",
	});
}

export default Component;
