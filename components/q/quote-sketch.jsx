import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j9nhecbga.css';
import '../../css/x/xnrpwftli.css';
import '../../css/v/vrcorib2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j9nhecbga"/><path class="xnrpwftli"/><path class="vrcorib2z"/></g>`,
		"fallback": "withicons:quote-sketch",
	});
}

export default Component;
