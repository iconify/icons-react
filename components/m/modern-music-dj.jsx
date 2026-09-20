import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e6qkrbqmg.css';
import '../../css/e/e8vgjlymu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e6qkrbqmg"/><path class="e8vgjlymu"/></g>`,
		"fallback": "streamline-ultimate:modern-music-dj",
	});
}

export default Component;
