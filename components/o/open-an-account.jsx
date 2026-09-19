import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s1fladbkj.css';
import '../../css/y/y_odl42ju.css';
import '../../css/e/eovdg6d5i.css';
import '../../css/h/h13kfet8r.css';
import '../../css/x/x0lz4dbgz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="s1fladbkj"/><path class="y_odl42ju"/><path class="eovdg6d5i"/><circle class="h13kfet8r"/><path class="x0lz4dbgz"/></g>`,
		"fallback": "icon-park:open-an-account",
	});
}

export default Component;
