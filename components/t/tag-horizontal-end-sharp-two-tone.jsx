import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l1ojs5toy.css';
import '../../css/j/jz4jhsbks.css';
import '../../css/z/zznlfnbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l1ojs5toy"/><path class="jz4jhsbks"/><path class="zznlfnbip"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-end-sharp-two-tone",
	});
}

export default Component;
