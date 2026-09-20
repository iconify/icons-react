import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p34mgacly.css';
import '../../css/p/pe49ib2bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p34mgacly"/><circle class="pe49ib2bf"/></g>`,
		"fallback": "lucide:shield-cog-corner",
	});
}

export default Component;
