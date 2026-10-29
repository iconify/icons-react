import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/ba-jbp93i.css';
import '../../css/i/iiz81ccfv.css';
import '../../css/j/jb30jnbsl.css';
import '../../css/g/garfggb5n.css';
import '../../css/e/ezpal-bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ba-jbp93i wm-k"/><path class="iiz81ccfv wm-s"/><path class="jb30jnbsl"/><path class="garfggb5n"/><path class="ezpal-bxv wm-s"/></g>`,
		"fallback": "withicons-bauhaus:server-cog",
	});
}

export default Component;
