import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/k/kwuihk8vk.css';
import '../../css/v/v5beli-4s.css';
import '../../css/r/r1cxy2bpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="utf5_xbzs"/><path class="kwuihk8vk"/><path class="v5beli-4s"/><path class="r1cxy2bpc"/></g>`,
		"fallback": "icon-park:transaction",
	});
}

export default Component;
