import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tlsu4zyio.css';
import '../../css/h/h2c03wb3v.css';
import '../../css/i/il3hrdb7s.css';
import '../../css/s/spnf93r-f.css';
import '../../css/x/xh76--bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tlsu4zyio wm-k"/><path class="h2c03wb3v wm-s"/><path class="il3hrdb7s wm-shadow"/><path class="spnf93r-f wm-k"/><path class="wm-s xh76--bfd"/></g>`,
		"fallback": "withicons:phone-forwarded-engrave",
	});
}

export default Component;
