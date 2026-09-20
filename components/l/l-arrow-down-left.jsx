import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/suj7micvh.css';
import '../../css/s/sz9-6wq4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="suj7micvh"/><path class="sz9-6wq4q"/></g>`,
		"fallback": "mage:l-arrow-down-left",
	});
}

export default Component;
