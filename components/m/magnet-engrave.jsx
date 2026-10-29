import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x_32s8b6z.css';
import '../../css/y/yri-nfb2u.css';
import '../../css/a/aa7exib7i.css';
import '../../css/j/jura4nbok.css';
import '../../css/f/fcpcu9i2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x_32s8b6z"/><path class="wm-a yri-nfb2u"/><path class="aa7exib7i wm-shadow"/><path class="jura4nbok wm-k"/><path class="fcpcu9i2b wm-a"/></g>`,
		"fallback": "withicons:magnet-engrave",
	});
}

export default Component;
