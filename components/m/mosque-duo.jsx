import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqoc5ebvr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/opyt3kb3y.css';
import '../../css/p/pfijxkg_b.css';
import '../../css/g/g7cjtj1xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqoc5ebvr secondary"/><g class="dt0cm9dhy primary"><path class="opyt3kb3y"/><path class="pfijxkg_b"/><path class="g7cjtj1xf"/></g>`,
		"fallback": "iconaut:mosque-duo",
	});
}

export default Component;
