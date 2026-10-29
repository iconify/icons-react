import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d1dcdbblm.css';
import '../../css/i/ipkd9vbgw.css';
import '../../css/h/hchqqbcqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d1dcdbblm"/><path class="ipkd9vbgw"/><path class="hchqqbcqj wm-a"/></g>`,
		"fallback": "withicons:thermometer-snowflake-duo",
	});
}

export default Component;
