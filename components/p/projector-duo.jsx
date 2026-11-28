import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i58j_c0ir.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mcccz011g.css';
import '../../css/f/fnqnyblgp.css';
import '../../css/l/lzjuftnye.css';
import '../../css/l/laudgkbxt.css';
import '../../css/y/yi1m21xqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i58j_c0ir secondary"/><g class="dt0cm9dhy primary"><path class="mcccz011g"/><path class="fnqnyblgp"/><path class="lzjuftnye"/><path class="laudgkbxt"/><path class="yi1m21xqm"/></g>`,
		"fallback": "iconaut:projector-duo",
	});
}

export default Component;
