import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i87ljq8sy.css';
import '../../css/s/srigqbf1b.css';
import '../../css/w/w0rbxob2c.css';
import '../../css/z/zrt6lub-k.css';
import '../../css/v/v6en1acrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i87ljq8sy"/><path class="srigqbf1b wm-k"/><path class="w0rbxob2c wm-k"/><path class="wm-s zrt6lub-k"/><path class="v6en1acrc wm-s"/></g>`,
		"fallback": "withicons:user-x-sketch",
	});
}

export default Component;
