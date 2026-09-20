import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jaj2r1bap.css';
import '../../css/e/effnay8ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jaj2r1bap"/><path class="effnay8ej"/></g>`,
		"fallback": "streamline-ultimate:modern-music-electric-guitar",
	});
}

export default Component;
