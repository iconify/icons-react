import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nd39lwb3c.css';
import '../../css/z/zy5b82-ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nd39lwb3c"/><path class="zy5b82-ar"/></g>`,
		"fallback": "hugeicons:scale3d",
	});
}

export default Component;
