import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p2iw4076h.css';
import '../../css/t/teso3ibks.css';
import '../../css/e/enth-ja-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p2iw4076h"/><path class="teso3ibks"/><path class="enth-ja-s"/></g>`,
		"fallback": "hugeicons:money-exchange-02",
	});
}

export default Component;
