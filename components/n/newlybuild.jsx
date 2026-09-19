import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/v9jvlqb3d.css';
import '../../css/l/la-dqtbxo.css';
import '../../css/l/lx86l0pzx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="v9jvlqb3d"/><rect class="la-dqtbxo"/><path class="lx86l0pzx"/></g>`,
		"fallback": "icon-park-outline:newlybuild",
	});
}

export default Component;
