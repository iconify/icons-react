import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke4nxkbkt.css';
import '../../css/c/cj76tkanc.css';
import '../../css/n/n2gzn3bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke4nxkbkt"/><path class="cj76tkanc"/><path clip-rule="evenodd" class="n2gzn3bem"/>`,
		"fallback": "solar:speaker-minimalistic-bold-duotone",
	});
}

export default Component;
