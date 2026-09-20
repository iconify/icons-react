import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aebuh5xgd.css';
import '../../css/f/fv16gk6ht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="aebuh5xgd"/><path class="fv16gk6ht"/></g>`,
		"fallback": "reicon:video-play-v-filled",
	});
}

export default Component;
