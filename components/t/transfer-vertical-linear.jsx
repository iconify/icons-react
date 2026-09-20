import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qkmssf62n.css';
import '../../css/v/v5zr4wbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qkmssf62n"/><path class="v5zr4wbeq"/></g>`,
		"fallback": "solar:transfer-vertical-linear",
	});
}

export default Component;
