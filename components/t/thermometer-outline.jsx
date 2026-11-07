import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyjboy1lu.css';
import '../../css/w/w72z5bcvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyjboy1lu"/><path clip-rule="evenodd" class="w72z5bcvg"/>`,
		"fallback": "solar:thermometer-outline",
	});
}

export default Component;
