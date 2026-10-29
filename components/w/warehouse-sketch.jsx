import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/veen_8bxc.css';
import '../../css/q/q8pfntl8k.css';
import '../../css/u/u4-339brq.css';
import '../../css/t/t-i6f8bdi.css';
import '../../css/z/zybwzifyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="veen_8bxc"/><path class="q8pfntl8k wm-k"/><path class="u4-339brq wm-a"/><path class="t-i6f8bdi wm-k"/><path class="wm-a zybwzifyj"/></g>`,
		"fallback": "withicons:warehouse-sketch",
	});
}

export default Component;
