import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wc2-dxbuv.css';
import '../../css/f/fjdyfn62r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wc2-dxbuv"/><path class="fjdyfn62r"/></g>`,
		"fallback": "hugeicons:money-bag-time",
	});
}

export default Component;
