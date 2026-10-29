import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cjtghllwe.css';
import '../../css/g/gl--lubve.css';
import '../../css/e/e2_mtpbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cjtghllwe"/><path class="gl--lubve wm-shadow"/><path class="e2_mtpbne"/></g>`,
		"fallback": "withicons:panel-bottom-engrave",
	});
}

export default Component;
