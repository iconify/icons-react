import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6upunlfr.css';
import '../../css/b/b1y2drbir.css';
import '../../css/t/thd_4qb3d.css';
import '../../css/v/vohphgbml.css';
import '../../css/t/t1x9jzgct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z6upunlfr"/><path class="b1y2drbir"/><path class="thd_4qb3d"/><path class="vohphgbml"/><path class="t1x9jzgct"/></g>`,
		"fallback": "streamline-ultimate-color:insurance-hand",
	});
}

export default Component;
