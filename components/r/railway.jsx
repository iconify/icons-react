import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wztm61yks.css';
import '../../css/x/xfuq7vbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wztm61yks"/><path class="xfuq7vbuu"/>`,
		"fallback": "bxl:railway",
	});
}

export default Component;
