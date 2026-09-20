import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g4_vnzs8s.css';
import '../../css/m/mevjw7etc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g4_vnzs8s"/><path class="mevjw7etc"/></g>`,
		"fallback": "reicon:pen-tool4",
	});
}

export default Component;
