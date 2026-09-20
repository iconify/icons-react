import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zv9ww4u1l.css';
import '../../css/l/l0tx67liw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zv9ww4u1l"/><path class="l0tx67liw"/></g>`,
		"fallback": "reicon:video-remove",
	});
}

export default Component;
