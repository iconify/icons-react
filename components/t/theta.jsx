import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g5jz-8juq.css';
import '../../css/v/vk97tacgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="g5jz-8juq"/><path class="vk97tacgo"/></g>`,
		"fallback": "matita:theta",
	});
}

export default Component;
