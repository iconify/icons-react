import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cmsl8lt0e.css';
import '../../css/w/wvj61cc2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cmsl8lt0e"/><path class="wvj61cc2v"/></g>`,
		"fallback": "hugeicons:settings-01",
	});
}

export default Component;
