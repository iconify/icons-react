import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/iv7iptbda.css';
import '../../css/j/jlhhcybzn.css';
import '../../css/x/xqto25bur.css';
import '../../css/y/yilw6-bgb.css';
import '../../css/v/vxl43gwxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="iv7iptbda wm-shadow"/><path class="jlhhcybzn wm-shadow"/><path class="xqto25bur"/><path class="yilw6-bgb"/><path class="vxl43gwxw"/></g>`,
		"fallback": "withicons-brutal:server",
	});
}

export default Component;
