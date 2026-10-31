import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/amlt84-gv.css';
import '../../css/u/ul25qsb-p.css';
import '../../css/w/wpaza5mjr.css';
import '../../css/b/buo1bibpg.css';
import '../../css/j/jqa0hrbdc.css';
import '../../css/v/vrhlvlbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="amlt84-gv wm-shadow"/><path class="ul25qsb-p"/><path class="wpaza5mjr"/><path class="buo1bibpg"/><path class="jqa0hrbdc"/><path class="vrhlvlbks"/></g>`,
		"fallback": "withicons-retro:truck",
	});
}

export default Component;
