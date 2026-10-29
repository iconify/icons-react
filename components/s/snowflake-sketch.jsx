import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/suzw7xbbl.css';
import '../../css/k/kivd_7bqx.css';
import '../../css/v/vhm99pbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="suzw7xbbl wm-k"/><path class="kivd_7bqx wm-k"/><path class="vhm99pbwe wm-a"/></g>`,
		"fallback": "withicons:snowflake-sketch",
	});
}

export default Component;
