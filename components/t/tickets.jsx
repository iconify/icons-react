import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhjhcebay.css';
import '../../css/s/sq8m2mg-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhjhcebay"/><path class="sq8m2mg-a"/>`,
		"fallback": "boxicons:tickets",
	});
}

export default Component;
