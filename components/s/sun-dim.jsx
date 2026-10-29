import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bk04fhbuy.css';
import '../../css/q/q42xo2b2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bk04fhbuy"/><path class="q42xo2b2p wm-a"/></g>`,
		"fallback": "withicons:sun-dim",
	});
}

export default Component;
