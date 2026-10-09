import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2wj_vbdg.css';
import '../../css/v/v0d4hxfqr.css';
import '../../css/c/coi900bro.css';
import '../../css/i/ilidubbxi.css';
import '../../css/u/ux60etw0a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2wj_vbdg"/><path class="v0d4hxfqr"/><path class="coi900bro"/><path class="ilidubbxi"/><path class="ux60etw0a"/>`,
		"fallback": "energy-icons:tennis-20-bold",
	});
}

export default Component;
