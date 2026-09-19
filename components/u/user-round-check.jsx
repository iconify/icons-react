import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sbcoewbih.css';
import '../../css/v/v86g01bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sbcoewbih"/><path class="v86g01bhw"/></g>`,
		"fallback": "hugeicons:user-round-check",
	});
}

export default Component;
