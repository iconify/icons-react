import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr_v2zbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr_v2zbad"/>`,
		"fallback": "thesvg-color:snowflake",
	});
}

export default Component;
