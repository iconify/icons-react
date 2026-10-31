import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jgeqrp5ro.css';
import '../../css/n/n6r0d6boy.css';
import '../../css/h/hhwgsyjct.css';
import '../../css/e/et0vgdg-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jgeqrp5ro wm-shadow"/><path class="n6r0d6boy wm-shadow"/><path class="hhwgsyjct"/><path class="et0vgdg-f"/></g>`,
		"fallback": "withicons-brutal:volume-1",
	});
}

export default Component;
