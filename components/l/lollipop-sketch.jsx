import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lfcmlbvrc.css';
import '../../css/m/mboxxfb9b.css';
import '../../css/e/esaiihsdv.css';
import '../../css/v/vqk9ftbxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lfcmlbvrc wm-k"/><path class="mboxxfb9b wm-a"/><path class="esaiihsdv wm-k"/><path class="vqk9ftbxk wm-a"/></g>`,
		"fallback": "withicons:lollipop-sketch",
	});
}

export default Component;
