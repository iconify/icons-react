import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sng0m5e4g.css';
import '../../css/s/shu_ctb9u.css';
import '../../css/i/iqy4f3ajf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sng0m5e4g"/><path class="shu_ctb9u"/><path class="iqy4f3ajf"/></g>`,
		"fallback": "solar:speaker-line-duotone",
	});
}

export default Component;
