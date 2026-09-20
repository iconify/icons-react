import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/e/eci58wbwa.css';
import '../../css/s/sjhfzccza.css';
import '../../css/b/ba3c2-ybd.css';
import '../../css/e/ejah339eg.css';
import '../../css/v/vmgnrwmrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="eci58wbwa"/><path class="sjhfzccza"/><path class="ba3c2-ybd"/><path class="ejah339eg"/><path class="vmgnrwmrp"/></g>`,
		"fallback": "streamline-sharp-color:surveillance-camera",
	});
}

export default Component;
