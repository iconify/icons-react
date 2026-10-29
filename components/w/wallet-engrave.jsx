import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h8z4rab1x.css';
import '../../css/b/bg-ts3-ud.css';
import '../../css/f/f43-noibm.css';
import '../../css/a/as3krbbzb.css';
import '../../css/a/ax-9akbyt.css';
import '../../css/k/kbxro98gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h8z4rab1x wm-k"/><path class="bg-ts3-ud wm-a"/><path class="f43-noibm wm-shadow"/><path class="as3krbbzb wm-k"/><path class="ax-9akbyt wm-k"/><path class="kbxro98gm wm-a"/></g>`,
		"fallback": "withicons:wallet-engrave",
	});
}

export default Component;
