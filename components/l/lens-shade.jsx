import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqzczqbtc.css';
import '../../css/o/o7jrp6bdc.css';
import '../../css/k/k4twuh3gg.css';
import '../../css/z/zpicldb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nqzczqbtc"/><path class="o7jrp6bdc"/><path class="k4twuh3gg"/><path class="zpicldb5f"/></g>`,
		"fallback": "streamline-ultimate-color:lens-shade",
	});
}

export default Component;
