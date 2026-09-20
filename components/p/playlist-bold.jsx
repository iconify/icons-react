import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/md3nx9bpg.css';
import '../../css/k/kf1zmhb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="md3nx9bpg"/><path class="kf1zmhb1a"/></g>`,
		"fallback": "solar:playlist-bold",
	});
}

export default Component;
