import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rap11obza.css';
import '../../css/f/fr_tmn9fp.css';
import '../../css/g/ga7t0girt.css';
import '../../css/c/chuhguiil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rap11obza"/><circle class="fr_tmn9fp"/><path class="ga7t0girt"/><path class="chuhguiil"/></g>`,
		"fallback": "solar:passport-linear",
	});
}

export default Component;
