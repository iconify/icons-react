import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swfk1bc4e.css';
import '../../css/d/dzcaxfb9b.css';
import '../../css/x/xzwdldb2p.css';
import '../../css/e/el_6yubsq.css';
import '../../css/x/xzf88acgf.css';
import '../../css/c/cwydbfbae.css';
import '../../css/a/aquxf01fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swfk1bc4e wm-shadow"/><path class="dzcaxfb9b"/><path class="xzwdldb2p"/><path class="el_6yubsq"/><path class="xzf88acgf"/><path class="cwydbfbae wm-shine"/><path class="aquxf01fx"/>`,
		"fallback": "withicons-plush:music-2",
	});
}

export default Component;
