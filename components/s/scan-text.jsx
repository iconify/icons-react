import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/swtpprbgm.css';
import '../../css/m/mgg03l53y.css';
import '../../css/e/e6sdb8jnz.css';
import '../../css/p/pw--o7bns.css';
import '../../css/y/y93scrq9n.css';
import '../../css/e/ek20wvblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="swtpprbgm"/><path class="mgg03l53y"/><path class="e6sdb8jnz"/><path class="pw--o7bns"/><path class="y93scrq9n"/><path class="ek20wvblp"/></g>`,
		"fallback": "iconaut:scan-text",
	});
}

export default Component;
