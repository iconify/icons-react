import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z-q5zv9jg.css';
import '../../css/u/u2v_hebgr.css';
import '../../css/n/nuyj-1d-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z-q5zv9jg"/><circle class="u2v_hebgr"/><path class="nuyj-1d-b"/></g>`,
		"fallback": "lucide:snail",
	});
}

export default Component;
