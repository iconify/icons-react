import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fncz_m7by.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fncz_m7by"/>`,
		"fallback": "fontisto:snowflake",
	});
}

export default Component;
