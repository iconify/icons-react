import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evzxtvk0v.css';
import '../../css/p/p2wm08ihw.css';
import '../../css/x/xjfc-xbtr.css';
import '../../css/v/vprexkb0f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="evzxtvk0v"/><path class="p2wm08ihw"/><path class="xjfc-xbtr"/><path class="vprexkb0f"/></g>`,
		"fallback": "streamline-color:smiley-happy",
	});
}

export default Component;
