import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cmyeelv4u.css';
import '../../css/o/ohsupcbxt.css';
import '../../css/i/inidtdb2d.css';
import '../../css/a/aulea8_ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="cmyeelv4u"/><path class="ohsupcbxt wm-a"/><path class="inidtdb2d wm-k"/><path class="aulea8_ox wm-a"/></g>`,
		"fallback": "withicons:thermometer-snowflake-sketch",
	});
}

export default Component;
