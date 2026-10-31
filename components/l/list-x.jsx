import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kxo47_nbn.css';
import '../../css/f/fqx4c0b0g.css';
import '../../css/k/kha5ngbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kxo47_nbn"/><path class="fqx4c0b0g"/><path class="kha5ngbtu wm-s"/></g>`,
		"fallback": "withicons-retro:list-x",
	});
}

export default Component;
