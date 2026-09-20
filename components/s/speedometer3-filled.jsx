import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hqiycqbmw.css';
import '../../css/d/d-ajtmkoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hqiycqbmw"/><path class="d-ajtmkoa"/></g>`,
		"fallback": "reicon:speedometer3-filled",
	});
}

export default Component;
