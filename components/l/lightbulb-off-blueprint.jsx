import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/a6flzv85o.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/h/hyoz_h2gb.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="a6flzv85o wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="hyoz_h2gb wm-k"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:lightbulb-off-blueprint",
	});
}

export default Component;
