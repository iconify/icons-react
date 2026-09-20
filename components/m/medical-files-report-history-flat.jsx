import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iubb9-b0f.css';
import '../../css/q/qq1t4eb0n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iubb9-b0f"/><path class="qq1t4eb0n"/></g>`,
		"fallback": "streamline-color:medical-files-report-history-flat",
	});
}

export default Component;
