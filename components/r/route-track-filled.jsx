import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cj6l2-z2h.css';
import '../../css/g/gyql7h6tw.css';
import '../../css/j/jgqlw59hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cj6l2-z2h"/><path class="gyql7h6tw"/><path class="jgqlw59hy"/></g>`,
		"fallback": "reicon:route-track-filled",
	});
}

export default Component;
