import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tlsu4zyio.css';
import '../../css/w/wygh01b0s.css';
import '../../css/s/spnf93r-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tlsu4zyio"/><path class="wm-shadow wygh01b0s"/><path class="spnf93r-f"/></g>`,
		"fallback": "withicons:phone-engrave",
	});
}

export default Component;
