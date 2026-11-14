import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f38hm9bft.css';
import '../../css/s/spsll1bqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f38hm9bft"/><path class="spsll1bqe"/></g>`,
		"fallback": "hugeicons:pie-chart",
	});
}

export default Component;
