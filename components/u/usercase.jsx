import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fj6-sjafq.css';
import '../../css/s/s2cf-0buv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fj6-sjafq"/><path class="s2cf-0buv"/></g>`,
		"fallback": "tdesign:usercase",
	});
}

export default Component;
