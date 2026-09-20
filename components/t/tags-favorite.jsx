import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjagirbpg.css';
import '../../css/q/qx-x14bgc.css';
import '../../css/e/epqgrhbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rjagirbpg"/><path class="qx-x14bgc"/><path class="epqgrhbih"/></g>`,
		"fallback": "streamline-ultimate:tags-favorite",
	});
}

export default Component;
