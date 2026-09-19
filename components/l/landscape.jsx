import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/y6jgvvbge.css';
import '../../css/z/z9u8ap1ht.css';
import '../../css/a/ah80pbbtz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="y6jgvvbge"/><path class="z9u8ap1ht"/><path class="ah80pbbtz"/></g>`,
		"fallback": "icon-park:landscape",
	});
}

export default Component;
