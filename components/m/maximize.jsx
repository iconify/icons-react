import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gkee2nysx.css';
import '../../css/y/y7ev9xbdz.css';
import '../../css/r/rrtkz0b0z.css';
import '../../css/y/yu55nbdpt.css';
import '../../css/k/kp3veacqr.css';
import '../../css/t/tcex32hyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="gkee2nysx wm-shadow"/><path class="y7ev9xbdz"/><path class="rrtkz0b0z"/><path class="yu55nbdpt"/><path class="kp3veacqr wm-shine"/><path class="tcex32hyq wm-deco"/></g>`,
		"fallback": "withicons-sticker:maximize",
	});
}

export default Component;
