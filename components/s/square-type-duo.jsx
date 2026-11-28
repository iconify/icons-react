import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifjhrvbty.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lk2gmgbqk.css';
import '../../css/d/d0qdg3dzf.css';
import '../../css/x/xxgdw-btn.css';
import '../../css/f/fkpiqrb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifjhrvbty secondary"/><g class="dt0cm9dhy primary"><path class="lk2gmgbqk"/><path class="d0qdg3dzf"/><path class="xxgdw-btn"/><path class="fkpiqrb4a"/></g>`,
		"fallback": "iconaut:square-type-duo",
	});
}

export default Component;
