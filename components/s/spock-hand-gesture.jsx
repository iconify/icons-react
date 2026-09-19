import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g6xnss8uu.css';
import '../../css/p/pv5kapb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g6xnss8uu"/><path class="pv5kapb6o"/></g>`,
		"fallback": "iconoir:spock-hand-gesture",
	});
}

export default Component;
