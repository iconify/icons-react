import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gdvei7bsb.css';
import '../../css/z/zx2wvfu8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gdvei7bsb"/><path class="zx2wvfu8t"/></g>`,
		"fallback": "lucide:square-sparkles",
	});
}

export default Component;
