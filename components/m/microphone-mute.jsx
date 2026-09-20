import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y1f44fbrc.css';
import '../../css/g/g64u9bapr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y1f44fbrc"/><path class="g64u9bapr"/></g>`,
		"fallback": "mage:microphone-mute",
	});
}

export default Component;
