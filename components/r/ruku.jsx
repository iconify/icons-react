import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dgeparbxw.css';
import '../../css/c/cl5ftv9vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dgeparbxw"/><path class="cl5ftv9vz"/></g>`,
		"fallback": "hugeicons:ruku",
	});
}

export default Component;
