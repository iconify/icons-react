import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hlln3whts.css';
import '../../css/z/z6r511b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hlln3whts"/><path class="z6r511b4d"/></g>`,
		"fallback": "hugeicons:wallet-05",
	});
}

export default Component;
