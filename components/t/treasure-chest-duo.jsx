import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkxqnt3lh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtx1_6bic.css';
import '../../css/o/oaid0l9ds.css';
import '../../css/u/u9sticxvs.css';
import '../../css/t/t2t2rdswm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkxqnt3lh secondary"/><g class="dt0cm9dhy primary"><path class="gtx1_6bic"/><path class="oaid0l9ds"/><path class="u9sticxvs"/><path class="t2t2rdswm"/></g>`,
		"fallback": "iconaut:treasure-chest-duo",
	});
}

export default Component;
