import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p7zwkobsx.css';
import '../../css/a/a94nuzeff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p7zwkobsx"/><path class="a94nuzeff"/></g>`,
		"fallback": "lucide-lab:reel-thread",
	});
}

export default Component;
