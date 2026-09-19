import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u665ucc1o.css';
import '../../css/h/h450ksbac.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u665ucc1o"/><path class="h450ksbac"/></g>`,
		"fallback": "charm:microphone",
	});
}

export default Component;
