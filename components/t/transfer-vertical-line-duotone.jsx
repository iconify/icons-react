import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qkmssf62n.css';
import '../../css/o/o8so0wb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qkmssf62n"/><path class="o8so0wb8y"/></g>`,
		"fallback": "solar:transfer-vertical-line-duotone",
	});
}

export default Component;
