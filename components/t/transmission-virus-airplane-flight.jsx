import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aq70vib7l.css';
import '../../css/a/aynsz14nk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aq70vib7l"/><path class="aynsz14nk"/></g>`,
		"fallback": "covid:transmission-virus-airplane-flight",
	});
}

export default Component;
