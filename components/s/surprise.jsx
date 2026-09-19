import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/l/ljc7yo2sg.css';
import '../../css/y/yoyx7fmdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="shu3xdl9q"/><ellipse class="ljc7yo2sg"/><path class="yoyx7fmdr"/></g>`,
		"fallback": "hugeicons:surprise",
	});
}

export default Component;
