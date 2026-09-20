import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0viuutrh.css';
import '../../css/f/fy-g4rb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0viuutrh"/><path class="fy-g4rb8o"/>`,
		"fallback": "stash:shield-check",
	});
}

export default Component;
