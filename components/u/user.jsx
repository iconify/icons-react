import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r69eunb6m.css';
import '../../css/g/gifnzwbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r69eunb6m"/><path class="gifnzwbsx"/></g>`,
		"fallback": "iconoir:user",
	});
}

export default Component;
