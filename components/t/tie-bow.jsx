import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lh4u3acyr.css';
import '../../css/l/l-_z1-nfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lh4u3acyr"/><path class="l-_z1-nfk"/></g>`,
		"fallback": "lucide-lab:tie-bow",
	});
}

export default Component;
