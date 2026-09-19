import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8za_lbmz.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8za_lbmz"/>`,
		"fallback": "fontisto:sina-weibo",
	});
}

export default Component;
