import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tqjv66bis.css';
import '../../css/m/mio52ig2b.css';
import '../../css/d/dc2p-i6dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tqjv66bis"/><circle class="mio52ig2b"/><path class="dc2p-i6dq"/></g>`,
		"fallback": "lucide:user-check-2",
	});
}

export default Component;
