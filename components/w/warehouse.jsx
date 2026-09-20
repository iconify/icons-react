import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qw_8fzb8b.css';
import '../../css/s/s7o03ibyd.css';
import '../../css/o/otfxoeynd.css';
import '../../css/o/o4uii-bhq.css';
import '../../css/d/d6uoor03l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qw_8fzb8b"/><path class="s7o03ibyd"/><path class="otfxoeynd"/><path class="o4uii-bhq"/><path class="d6uoor03l"/></g>`,
		"fallback": "pixelarticons:warehouse",
	});
}

export default Component;
