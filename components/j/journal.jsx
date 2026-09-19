import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o6vxf8bug.css';
import '../../css/j/jvcaccb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o6vxf8bug"/><path class="jvcaccb8f"/></g>`,
		"fallback": "iconoir:journal",
	});
}

export default Component;
