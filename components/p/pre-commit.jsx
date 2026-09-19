import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukg496alp.css';
import '../../css/m/m2xavebym.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect transform="rotate(-45)" class="ukg496alp"/><path class="m2xavebym"/>`,
		"fallback": "catppuccin:pre-commit",
	});
}

export default Component;
