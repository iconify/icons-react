import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5zqrfbjz.css';
import '../../css/c/cjj93mxay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5zqrfbjz"/><path class="cjj93mxay"/>`,
		"fallback": "thesvg-color:skywork",
	});
}

export default Component;
