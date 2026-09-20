import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s-cr8mbps.css';
import '../../css/n/nm4o4yd2o.css';
import '../../css/s/s_c67512j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s-cr8mbps"/><path class="nm4o4yd2o"/><path class="s_c67512j"/></g>`,
		"fallback": "mage:television-question-mark",
	});
}

export default Component;
