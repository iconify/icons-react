import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/ts5dt37pz.css';
import '../../css/z/z0jrw3p8y.css';
import '../../css/b/bpdsg_leg.css';
import '../../css/g/gbdhdgqfy.css';
import '../../css/g/gavhrxd4b.css';
import '../../css/p/phew0bc4t.css';
import '../../css/m/mw-i3xxqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ts5dt37pz wm-shadow"/><path class="z0jrw3p8y"/><path class="bpdsg_leg"/><path class="gbdhdgqfy"/><path class="gavhrxd4b"/><path class="phew0bc4t"/><path class="mw-i3xxqi wm-s"/></g>`,
		"fallback": "withicons-retro:map-pin-plus",
	});
}

export default Component;
