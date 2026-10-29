import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hdmjz_v7e.css';
import '../../css/i/igyvzibfq.css';
import '../../css/z/zh570bf1g.css';
import '../../css/s/sb0u-ybxb.css';
import '../../css/j/jm3wwvbly.css';
import '../../css/m/mjpcappyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hdmjz_v7e wm-deco"/><path class="igyvzibfq wm-deco"/><path class="wm-k zh570bf1g"/><path class="sb0u-ybxb wm-a"/><path class="jm3wwvbly wm-a"/><path class="mjpcappyn wm-s"/></g>`,
		"fallback": "withicons:mouse-pointer-click-blueprint",
	});
}

export default Component;
