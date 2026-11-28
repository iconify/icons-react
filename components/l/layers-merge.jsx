import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lc5lxb17d.css';
import '../../css/r/rbohgvl9x.css';
import '../../css/u/udm6iph_s.css';
import '../../css/k/ky1-w1byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lc5lxb17d"/><path class="rbohgvl9x"/><path class="udm6iph_s"/><path class="ky1-w1byj"/></g>`,
		"fallback": "iconaut:layers-merge",
	});
}

export default Component;
