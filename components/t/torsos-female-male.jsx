import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjwhhhtch.css';
import '../../css/j/j4m9ayhmg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjwhhhtch"/><path class="j4m9ayhmg"/>`,
		"fallback": "foundation:torsos-female-male",
	});
}

export default Component;
