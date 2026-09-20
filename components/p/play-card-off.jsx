import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fd6id9bay.css';
import '../../css/k/k_isfnbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fd6id9bay"/><path class="k_isfnbfj"/></g>`,
		"fallback": "tabler:play-card-off",
	});
}

export default Component;
