import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r_vmnlbqt.css';
import '../../css/x/x_dosubkr.css';
import '../../css/z/zlxh3xbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r_vmnlbqt"/><path class="wm-a x_dosubkr"/><path class="wm-s zlxh3xbpe"/></g>`,
		"fallback": "withicons:sunset-solid",
	});
}

export default Component;
