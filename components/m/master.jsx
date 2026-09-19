import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-862obek.css';
import '../../css/x/x46_-vqrk.css';
import '../../css/t/tgpjl8b9x.css';
import '../../css/t/thwemd3eh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-862obek"/><rect class="x46_-vqrk"/><path class="tgpjl8b9x"/><circle class="thwemd3eh"/></g>`,
		"fallback": "icon-park:master",
	});
}

export default Component;
