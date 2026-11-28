import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mk3-rt67g.css';
import '../../css/p/p7kjmnotq.css';
import '../../css/d/dtpklfbst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mk3-rt67g"/><path class="p7kjmnotq"/><path class="dtpklfbst"/></g>`,
		"fallback": "iconaut:list-restart",
	});
}

export default Component;
