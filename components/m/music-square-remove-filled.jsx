import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r1ikd6yrl.css';
import '../../css/g/gga69cc5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r1ikd6yrl"/><path class="gga69cc5d"/></g>`,
		"fallback": "reicon:music-square-remove-filled",
	});
}

export default Component;
