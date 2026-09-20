import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vur7zybmo.css';
import '../../css/q/qitub7b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vur7zybmo"/><path class="qitub7b-h"/></g>`,
		"fallback": "reicon:play-circle3",
	});
}

export default Component;
