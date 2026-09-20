import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iep4hdbdm.css';
import '../../css/e/eh6wn1bzn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iep4hdbdm"/><path class="eh6wn1bzn"/></g>`,
		"fallback": "streamline-plump-color:login-1-flat",
	});
}

export default Component;
