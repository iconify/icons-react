import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j601zwbbx.css';
import '../../css/e/eupf27bpo.css';
import '../../css/i/iredkutyw.css';
import '../../css/w/wtl2pobdd.css';
import '../../css/i/ih9jzzbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j601zwbbx"/><path class="eupf27bpo"/><path class="iredkutyw"/><path class="wtl2pobdd"/><path class="ih9jzzbji"/></g>`,
		"fallback": "solar:suspension-line-duotone",
	});
}

export default Component;
