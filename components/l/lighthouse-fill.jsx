import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjuxlcckf.css';
import '../../css/e/ejuf35bcd.css';
import '../../css/x/xwkcvac5a.css';
import '../../css/w/whf4zhv6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bjuxlcckf"/><path class="ejuf35bcd"/><path clip-rule="evenodd" class="xwkcvac5a"/><path class="whf4zhv6r"/>`,
		"fallback": "mingcute:lighthouse-fill",
	});
}

export default Component;
