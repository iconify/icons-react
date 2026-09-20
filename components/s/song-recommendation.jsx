import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o66dwpwet.css';
import '../../css/b/bar1z4d_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o66dwpwet"/><path class="bar1z4d_q"/></g>`,
		"fallback": "streamline-sharp:song-recommendation",
	});
}

export default Component;
