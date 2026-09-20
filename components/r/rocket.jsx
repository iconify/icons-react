import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzemt-btl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzemt-btl"/>`,
		"fallback": "thesvg-color:rocket",
	});
}

export default Component;
