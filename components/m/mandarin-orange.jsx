import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yas8brj1a.css';
import '../../css/j/jj_auca0f.css';
import '../../css/i/i478tobft.css';
import '../../css/d/dxuevd1ne.css';
import '../../css/g/gvlxgnlzi.css';
import '../../css/x/xa1gfab0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow yas8brj1a"/><path class="jj_auca0f"/><path class="i478tobft"/><path class="dxuevd1ne"/><path class="gvlxgnlzi"/><path class="xa1gfab0n"/></g>`,
		"fallback": "withicons-retro:mandarin-orange",
	});
}

export default Component;
