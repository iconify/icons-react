import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7rwnpxsz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/u/u3sx6_b3g.css';
import '../../css/c/cej4cjp9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z7rwnpxsz"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><circle class="u3sx6_b3g"/><path class="cej4cjp9x"/></g>`,
		"fallback": "iconaut:user-circle-duo",
	});
}

export default Component;
