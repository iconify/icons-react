import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gtpf2q4_i.css';
import '../../css/d/dr87klbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gtpf2q4_i"/><path class="dr87klbnq"/></g>`,
		"fallback": "streamline-ultimate:receipt",
	});
}

export default Component;
