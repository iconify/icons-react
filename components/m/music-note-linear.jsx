import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lvnegepox.css';
import '../../css/n/n6e0xbyjd.css';
import '../../css/s/so9syjbwr.css';
import '../../css/e/eek4bo4aq.css';
import '../../css/x/xkfhx0hpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lvnegepox"/><path class="n6e0xbyjd"/><path class="so9syjbwr"/><path class="eek4bo4aq"/><path class="xkfhx0hpx"/></g>`,
		"fallback": "solar:music-note-linear",
	});
}

export default Component;
