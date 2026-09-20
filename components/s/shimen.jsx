import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qssgocp3o.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u8_ye8s0b.css';
import '../../css/a/av3m8fbrw.css';
import '../../css/k/kizgv9b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGA3txeXlP" class="qssgocp3o"/></defs><g class="ft5dv1b6b"><path class="u8_ye8s0b"/><use href="#SVGA3txeXlP"/><use href="#SVGA3txeXlP" class="av3m8fbrw"/><path class="kizgv9b-r"/></g>`,
		"fallback": "tdesign:shimen",
	});
}

export default Component;
