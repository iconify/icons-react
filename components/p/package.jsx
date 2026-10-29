import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/o-pqf7eub.css';
import '../../css/x/xr30mvbzj.css';
import '../../css/y/y33pzdb5t.css';
import '../../css/y/ye_izkbzt.css';
import '../../css/g/g8-fd1i8q.css';
import '../../css/u/usyb2xbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="o-pqf7eub wm-shadow"/><path class="xr30mvbzj"/><path class="y33pzdb5t"/><path class="ye_izkbzt"/><path class="g8-fd1i8q wm-shine"/><path class="usyb2xbzn wm-deco"/></g>`,
		"fallback": "withicons-sticker:package",
	});
}

export default Component;
