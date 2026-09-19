import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nygllnube.css';
import '../../css/b/bq131wbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nygllnube"/><path class="bq131wbrb"/></g>`,
		"fallback": "hugeicons:keyframe-top",
	});
}

export default Component;
