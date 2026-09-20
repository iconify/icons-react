import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ths0tvdky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ths0tvdky"/>`,
		"fallback": "solar:paperclip-2-outline",
	});
}

export default Component;
