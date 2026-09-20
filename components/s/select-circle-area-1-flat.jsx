import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuh7znbmb.css';
import '../../css/s/sy_szillg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xuh7znbmb"/><path clip-rule="evenodd" class="sy_szillg"/></g>`,
		"fallback": "streamline-plump-color:select-circle-area-1-flat",
	});
}

export default Component;
