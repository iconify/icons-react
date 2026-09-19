import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vobd55u4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="play-outline"><path class="(Stroke) 54 Vector vobd55u4d" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:play-outline",
	});
}

export default Component;
