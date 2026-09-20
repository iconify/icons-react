import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/msllribff.css';
import '../../css/h/hdx03h9ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="msllribff"/><path class="hdx03h9ay"/></g>`,
		"fallback": "reicon:microphone2",
	});
}

export default Component;
