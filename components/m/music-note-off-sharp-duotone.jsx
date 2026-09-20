import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zcsjmmbtn.css';
import '../../css/r/rn72_7b7r.css';
import '../../css/f/f4vx4ccga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zcsjmmbtn"/><path class="rn72_7b7r"/><path class="f4vx4ccga"/></g>`,
		"fallback": "keyline-icons:music-note-off-sharp-duotone",
	});
}

export default Component;
