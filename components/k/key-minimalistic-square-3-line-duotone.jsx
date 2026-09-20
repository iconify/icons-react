import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/r/ruaapyb8f.css';
import '../../css/n/noxj16s0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wf89k6buf"/><path class="ruaapyb8f"/><path class="noxj16s0k"/></g>`,
		"fallback": "solar:key-minimalistic-square-3-line-duotone",
	});
}

export default Component;
