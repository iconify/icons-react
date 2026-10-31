import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7mm91p0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7mm91p0x"/>`,
		"fallback": "coolicons:map-pin-fill-round",
	});
}

export default Component;
