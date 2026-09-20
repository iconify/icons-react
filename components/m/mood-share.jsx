import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/irhg7ey8h.css';
import '../../css/o/o3lpcab3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="irhg7ey8h"/><path class="o3lpcab3r"/></g>`,
		"fallback": "tabler:mood-share",
	});
}

export default Component;
