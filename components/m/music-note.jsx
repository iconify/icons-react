import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t_9i3bcru.css';
import '../../css/y/yjgpzpb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t_9i3bcru"/><path class="yjgpzpb4j"/></g>`,
		"fallback": "proicons:music-note",
	});
}

export default Component;
