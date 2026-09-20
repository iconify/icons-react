import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/dhrtn4gvs.css';
import '../../css/b/bae_vkb-h.css';
import '../../css/h/hr9306b4r.css';
import '../../css/m/mxrla6b4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="dhrtn4gvs"/><path class="bae_vkb-h"/><path class="hr9306b4r"/><path class="mxrla6b4q"/></g>`,
		"fallback": "streamline-plump-color:smoking-area",
	});
}

export default Component;
