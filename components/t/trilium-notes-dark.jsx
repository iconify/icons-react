import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsp6_lb-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsp6_lb-h"/>`,
		"fallback": "selfhst:trilium-notes-dark",
	});
}

export default Component;
