import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0m365bkk.css';
import '../../css/x/x4edefbgr.css';
import '../../css/k/kkxmdkb-g.css';
import '../../css/y/yd79u1b7a.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0m365bkk"/><circle class="x4edefbgr"/><circle class="kkxmdkb-g"/><circle class="yd79u1b7a"/>`,
		"fallback": "foundation:list-bullet",
	});
}

export default Component;
