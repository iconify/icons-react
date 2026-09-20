import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1y47fxpf.css';
import '../../css/y/yeq9bi_ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a1y47fxpf"/><path class="yeq9bi_ig"/></g>`,
		"fallback": "tabler:swipe",
	});
}

export default Component;
