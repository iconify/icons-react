import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfn27jbjy.css';
import '../../css/w/wcfr3egnv.css';
import '../../css/i/iwl2tovzf.css';
import '../../css/r/rg318jtjm.css';
import '../../css/p/p29gm4bxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wfn27jbjy"/><path class="wcfr3egnv"/><path clip-rule="evenodd" class="iwl2tovzf"/><path class="rg318jtjm"/><path clip-rule="evenodd" class="p29gm4bxn"/></g>`,
		"fallback": "streamline-sharp-color:startup-flat",
	});
}

export default Component;
