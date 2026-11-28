import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lwzhbozbb.css';
import '../../css/i/iko2wpiij.css';
import '../../css/g/gupzlzbzq.css';
import '../../css/f/f1jk_cb4z.css';
import '../../css/f/f6t_3ty3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lwzhbozbb"/><path class="iko2wpiij"/><path class="gupzlzbzq"/><path class="f1jk_cb4z"/><path class="f6t_3ty3e"/></g>`,
		"fallback": "iconaut:monitor-speaker",
	});
}

export default Component;
