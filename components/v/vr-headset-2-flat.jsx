import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/omazkmbrf.css';
import '../../css/v/v1lgmvned.css';
import '../../css/m/myvq1cxds.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="omazkmbrf"/><path class="v1lgmvned"/><path class="myvq1cxds"/></g>`,
		"fallback": "streamline-color:vr-headset-2-flat",
	});
}

export default Component;
