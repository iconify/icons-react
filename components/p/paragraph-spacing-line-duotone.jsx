import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jfkds5tvp.css';
import '../../css/g/ge3dxob1l.css';
import '../../css/i/iim04tfhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jfkds5tvp"/><path class="ge3dxob1l"/><path class="iim04tfhn"/></g>`,
		"fallback": "solar:paragraph-spacing-line-duotone",
	});
}

export default Component;
