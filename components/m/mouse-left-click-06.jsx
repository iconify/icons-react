import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/med7nebbt.css';
import '../../css/a/a8ijy1plb.css';
import '../../css/t/tpm-wl30j.css';
import '../../css/i/i590ahb1v.css';
import '../../css/x/x2vkoac2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="med7nebbt"/><path class="a8ijy1plb"/><path class="tpm-wl30j"/><path class="i590ahb1v"/><path class="x2vkoac2a"/></g>`,
		"fallback": "hugeicons:mouse-left-click-06",
	});
}

export default Component;
