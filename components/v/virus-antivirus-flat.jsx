import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndw_thbam.css';
import '../../css/d/d0k6uq76d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ndw_thbam"/><path clip-rule="evenodd" class="d0k6uq76d"/></g>`,
		"fallback": "streamline-plump-color:virus-antivirus-flat",
	});
}

export default Component;
