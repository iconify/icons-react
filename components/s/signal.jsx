import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/avlk84h5s.css';
import '../../css/x/xturd3b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="avlk84h5s"/><path class="xturd3b8y"/></g>`,
		"fallback": "hugeicons:signal",
	});
}

export default Component;
