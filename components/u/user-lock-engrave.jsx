import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vbv8wjbrb.css';
import '../../css/t/tlcs2-_4r.css';
import '../../css/l/l4hu7nbyy.css';
import '../../css/u/u6qqhub_k.css';
import '../../css/f/f0o41_9yv.css';
import '../../css/v/vhbuf1vkf.css';
import '../../css/b/bn-zze-ur.css';
import '../../css/a/aqvhnvemy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vbv8wjbrb wm-k"/><path class="tlcs2-_4r wm-a"/><path class="l4hu7nbyy wm-s"/><path class="u6qqhub_k wm-shadow"/><path class="f0o41_9yv wm-k"/><path class="vhbuf1vkf wm-s"/><path class="bn-zze-ur wm-a"/><path class="aqvhnvemy wm-s"/></g>`,
		"fallback": "withicons:user-lock-engrave",
	});
}

export default Component;
