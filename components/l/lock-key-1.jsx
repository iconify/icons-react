import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dk28yt5rz.css';
import '../../css/v/v-ys-vzqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dk28yt5rz"/><path class="v-ys-vzqx"/></g>`,
		"fallback": "streamline-freehand:lock-key-1",
	});
}

export default Component;
