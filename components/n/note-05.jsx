import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vme37io-m.css';
import '../../css/f/fa6xzshyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vme37io-m"/><path class="fa6xzshyu"/></g>`,
		"fallback": "hugeicons:note-05",
	});
}

export default Component;
