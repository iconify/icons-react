import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
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
		"content": `<g class="dt0cm9dhy"><path class="bmziltboo"/><path class="r05wzkk_i"/><path class="a7nqjfrbl"/></g>`,
		"fallback": "iconaut:popsicle",
	});
}

export default Component;
