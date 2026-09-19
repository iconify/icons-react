import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xa8ex-ief.css';
import '../../css/s/spa4e6bdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xa8ex-ief"/><path class="spa4e6bdk"/></g>`,
		"fallback": "hugeicons:policy",
	});
}

export default Component;
