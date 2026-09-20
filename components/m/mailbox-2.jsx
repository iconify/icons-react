import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/c/ctuw50b2f.css';
import '../../css/z/zdn_dqbyv.css';
import '../../css/b/bha8fmbwd.css';
import '../../css/h/ha9tnebsn.css';
import '../../css/n/ny0tiqbui.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="ctuw50b2f"/><path class="zdn_dqbyv"/><path class="bha8fmbwd"/><path class="ha9tnebsn"/><path class="ny0tiqbui"/></g>`,
		"fallback": "streamline-stickies-color:mailbox-2",
	});
}

export default Component;
