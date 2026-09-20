import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzokx42xa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzokx42xa"/>`,
		"fallback": "uil:user-plus",
	});
}

export default Component;
