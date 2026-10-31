import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oe7_vcbri.css';
import '../../css/i/i4ft-wb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oe7_vcbri"/><path class="i4ft-wb3e"/></g>`,
		"fallback": "coolicons:tree-pine-duocolor-round",
	});
}

export default Component;
