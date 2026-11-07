import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3c204bfu.css';
import '../../css/z/zxb9zmb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3c204bfu"/><path clip-rule="evenodd" class="zxb9zmb_m"/>`,
		"fallback": "solar:star-ring-bold",
	});
}

export default Component;
