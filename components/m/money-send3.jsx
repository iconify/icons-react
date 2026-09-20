import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hhvux2gvb.css';
import '../../css/q/q07jkcbuy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hhvux2gvb"/><path class="q07jkcbuy"/></g>`,
		"fallback": "reicon:money-send3",
	});
}

export default Component;
