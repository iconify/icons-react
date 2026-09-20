import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/i/i_lqrks1h.css';
import '../../css/h/h_79jpbkk.css';
import '../../css/b/bnpdgr2ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="i_lqrks1h"/><path class="h_79jpbkk"/><path class="bnpdgr2ia"/></g>`,
		"fallback": "streamline-logos:plurk-logo-3",
	});
}

export default Component;
