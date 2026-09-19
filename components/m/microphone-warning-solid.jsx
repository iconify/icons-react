import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dr3q1c4he.css';
import '../../css/t/tf1bq5bdc.css';
import '../../css/s/slgej5a-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dr3q1c4he"/><rect class="tf1bq5bdc"/><path class="slgej5a-s"/></g>`,
		"fallback": "iconoir:microphone-warning-solid",
	});
}

export default Component;
