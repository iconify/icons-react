import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txlw8ibpk.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/p/pwdedgbij.css';
import '../../css/f/fg9_jcc1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="txlw8ibpk"/><path class="y8ppixbeg"/><path class="pwdedgbij"/><path class="fg9_jcc1v"/></g>`,
		"fallback": "lucide-extended:shredder-duotone",
	});
}

export default Component;
