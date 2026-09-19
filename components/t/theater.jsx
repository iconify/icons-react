import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m7vi1cvwd.css';
import '../../css/x/x5yo2db5t.css';
import '../../css/g/g8e6vqbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m7vi1cvwd"/><path class="x5yo2db5t"/><path class="g8e6vqbev"/></g>`,
		"fallback": "hugeicons:theater",
	});
}

export default Component;
