import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjvt5mqru.css';
import '../../css/y/y9njoccth.css';
import '../../css/t/t5kr6cgli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yjvt5mqru"/><path class="y9njoccth"/><path class="t5kr6cgli"/></g>`,
		"fallback": "reicon:receipt-edit",
	});
}

export default Component;
