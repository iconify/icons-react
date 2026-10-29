import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mgjd0mq0y.css';
import '../../css/p/plzywsbvi.css';
import '../../css/j/janyg3b3l.css';
import '../../css/o/oym_uikuq.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/j/jh3r71blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mgjd0mq0y wm-deco"/><path class="plzywsbvi wm-deco"/><path class="janyg3b3l wm-deco"/><path class="oym_uikuq wm-k"/><path class="qr4ochb5c wm-s"/><path class="jh3r71blx wm-k"/></g>`,
		"fallback": "withicons:star-off-blueprint",
	});
}

export default Component;
