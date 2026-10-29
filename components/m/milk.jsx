import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yik19q6gx.css';
import '../../css/m/mimnazbtn.css';
import '../../css/y/yzcu05xgy.css';
import '../../css/n/nh6axkbqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="yik19q6gx"/><path class="mimnazbtn"/><path class="yzcu05xgy"/><path class="nh6axkbqh"/></g>`,
		"fallback": "withicons-bauhaus:milk",
	});
}

export default Component;
