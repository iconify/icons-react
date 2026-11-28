import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/y/ynh5_fbft.css';
import '../../css/e/er1t4lbmi.css';
import '../../css/e/exmrnrb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="ynh5_fbft"/><path class="er1t4lbmi"/><path class="exmrnrb6w"/></g>`,
		"fallback": "iconaut:plug-circle",
	});
}

export default Component;
