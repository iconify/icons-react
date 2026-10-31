import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fkj4x1zme.css';
import '../../css/s/s6p-_liru.css';
import '../../css/c/cg3yb2b9a.css';
import '../../css/c/c9vqod8lt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fkj4x1zme wm-shadow"/><path class="s6p-_liru"/><path class="cg3yb2b9a"/><path class="c9vqod8lt"/></g>`,
		"fallback": "withicons-retro:rose",
	});
}

export default Component;
