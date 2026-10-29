import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tlsu4zyio.css';
import '../../css/a/akuc8w9ak.css';
import '../../css/a/a-sal1mlb.css';
import '../../css/s/spnf93r-f.css';
import '../../css/s/slzsfcc0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tlsu4zyio wm-k"/><path class="akuc8w9ak wm-s"/><path class="a-sal1mlb wm-shadow"/><path class="spnf93r-f wm-k"/><path class="slzsfcc0u wm-s"/></g>`,
		"fallback": "withicons:phone-missed-engrave",
	});
}

export default Component;
