import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftxh2yu-e.css';
import '../../css/e/esz28i62g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftxh2yu-e"/><path class="esz28i62g"/>`,
		"fallback": "solar:square-arrow-down-bold-duotone",
	});
}

export default Component;
