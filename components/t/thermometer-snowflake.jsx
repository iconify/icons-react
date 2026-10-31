import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xdsar156a.css';
import '../../css/h/hrpif6bxm.css';
import '../../css/b/bfkp2srhy.css';
import '../../css/i/ipkd9vbgw.css';
import '../../css/k/kyljqdbig.css';
import '../../css/s/sygn0p_nc.css';
import '../../css/l/lvu1uudjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="xdsar156a"/><path class="hrpif6bxm"/><path class="bfkp2srhy wm-shine"/><path class="ipkd9vbgw wm-k"/><path class="kyljqdbig wm-a"/><path class="sygn0p_nc"/><path class="lvu1uudjh"/></g>`,
		"fallback": "withicons-kawaii:thermometer-snowflake",
	});
}

export default Component;
