import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qypqtym9h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bs3qkuyvu.css';
import '../../css/p/p0z9gxbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qypqtym9h secondary"/><g class="dt0cm9dhy primary"><path class="bs3qkuyvu"/><path class="p0z9gxbvk"/></g>`,
		"fallback": "iconaut:wand-duo",
	});
}

export default Component;
