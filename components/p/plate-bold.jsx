import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvv1albfv.css';
import '../../css/c/c8g41rsjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvv1albfv"/><path clip-rule="evenodd" class="c8g41rsjq"/>`,
		"fallback": "solar:plate-bold",
	});
}

export default Component;
