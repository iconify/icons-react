import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3e00n-cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3e00n-cn"/>`,
		"fallback": "fontisto:mysql",
	});
}

export default Component;
