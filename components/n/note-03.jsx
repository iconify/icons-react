import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vme37io-m.css';
import '../../css/v/vlusuky3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vme37io-m"/><path class="vlusuky3j"/></g>`,
		"fallback": "hugeicons:note-03",
	});
}

export default Component;
