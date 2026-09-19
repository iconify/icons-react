import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ie7yfcjzo.css';
import '../../css/b/bbj86qeqv.css';
import '../../css/k/kemz52mxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ie7yfcjzo"/><circle class="bbj86qeqv"/><path class="kemz52mxs"/></g>`,
		"fallback": "akar-icons:rss",
	});
}

export default Component;
