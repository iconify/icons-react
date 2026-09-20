import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rgifae4or.css';
import '../../css/k/k30ugsftl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rgifae4or"/><path class="k30ugsftl"/></g>`,
		"fallback": "streamline-sharp:smart-key",
	});
}

export default Component;
