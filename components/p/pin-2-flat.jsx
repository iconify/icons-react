import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkzoohb2f.css';
import '../../css/a/ahe27yb-a.css';
import '../../css/l/ljjyvfqub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zkzoohb2f"/><path clip-rule="evenodd" class="ahe27yb-a"/><path clip-rule="evenodd" class="ljjyvfqub"/></g>`,
		"fallback": "streamline-plump-color:pin-2-flat",
	});
}

export default Component;
