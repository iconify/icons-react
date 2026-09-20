import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r53ip5g5r.css';
import '../../css/i/i-co14bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r53ip5g5r"/><path class="i-co14bdz"/></g>`,
		"fallback": "reicon:profile-2user-filled",
	});
}

export default Component;
