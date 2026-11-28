import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5fyo4d1q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bmziltboo.css';
import '../../css/r/r05wzkk_i.css';
import '../../css/a/a7nqjfrbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5fyo4d1q secondary"/><g class="dt0cm9dhy primary"><path class="bmziltboo"/><path class="r05wzkk_i"/><path class="a7nqjfrbl"/></g>`,
		"fallback": "iconaut:popsicle-duo",
	});
}

export default Component;
