import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rumg0xb2s.css';
import '../../css/p/pvbrjybkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rumg0xb2s"/><path class="pvbrjybkv"/></g>`,
		"fallback": "lucide-lab:stairs-arch",
	});
}

export default Component;
