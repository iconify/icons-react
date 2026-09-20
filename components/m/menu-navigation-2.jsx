import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt_2d1boo.css';
import '../../css/j/jy9_vg6xa.css';
import '../../css/n/na82uytpv.css';
import '../../css/e/eho0tb_oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yt_2d1boo"/><path class="jy9_vg6xa"/><path class="na82uytpv"/><path class="eho0tb_oh"/></g>`,
		"fallback": "streamline-freehand-color:menu-navigation-2",
	});
}

export default Component;
