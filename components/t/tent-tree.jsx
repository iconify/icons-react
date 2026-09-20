import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ya6370b_w.css';
import '../../css/l/l55qfdbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="ya6370b_w"/><path class="l55qfdbrr"/></g>`,
		"fallback": "lucide:tent-tree",
	});
}

export default Component;
