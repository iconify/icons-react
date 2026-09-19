import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ye9cttgoc.css';
import '../../css/q/qha_uhbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ye9cttgoc"/><path class="qha_uhbkm"/></g>`,
		"fallback": "iconoir:vegan",
	});
}

export default Component;
