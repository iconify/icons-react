import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyuv6wu2h.css';
import '../../css/d/ddkudlafx.css';
import '../../css/m/m7o59w0fd.css';
import '../../css/a/a5m6zzbwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hyuv6wu2h"/><path clip-rule="evenodd" class="ddkudlafx"/><path class="m7o59w0fd"/><path class="a5m6zzbwi"/></g>`,
		"fallback": "icon-park:people-minus",
	});
}

export default Component;
