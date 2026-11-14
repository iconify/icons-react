import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o4gs9fbiq.css';
import '../../css/q/qvw6evbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o4gs9fbiq"/><path class="qvw6evbmz"/></g>`,
		"fallback": "hugeicons:robot-01",
	});
}

export default Component;
