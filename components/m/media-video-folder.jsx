import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q-q7xubzg.css';
import '../../css/t/txuas-44k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q-q7xubzg"/><path class="txuas-44k"/></g>`,
		"fallback": "iconoir:media-video-folder",
	});
}

export default Component;
