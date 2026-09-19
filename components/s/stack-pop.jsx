import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fl6mz6kqm.css';
import '../../css/l/la8im4b3t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fl6mz6kqm"/><path class="la8im4b3t"/></g>`,
		"fallback": "charm:stack-pop",
	});
}

export default Component;
