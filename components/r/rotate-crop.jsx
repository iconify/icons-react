import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gjp4bv4es.css';
import '../../css/t/tf1f8p1sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gjp4bv4es"/><path class="tf1f8p1sf"/></g>`,
		"fallback": "hugeicons:rotate-crop",
	});
}

export default Component;
