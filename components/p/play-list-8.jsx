import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j74h9q9lz.css';
import '../../css/h/hoi434opr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j74h9q9lz"/><path class="hoi434opr"/></g>`,
		"fallback": "streamline-sharp:play-list-8",
	});
}

export default Component;
