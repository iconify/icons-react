import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kjgs8i50v.css';
import '../../css/l/l9lvakqfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kjgs8i50v"/><path class="l9lvakqfo"/></g>`,
		"fallback": "hugeicons:microwave",
	});
}

export default Component;
