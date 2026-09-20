import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rgek210ji.css';
import '../../css/t/ta3jsxbbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rgek210ji"/><path class="ta3jsxbbp"/></g>`,
		"fallback": "reicon:location-slash-filled",
	});
}

export default Component;
