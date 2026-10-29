import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/za-y1svgo.css';
import '../../css/k/khw2__bqg.css';
import '../../css/l/lo43kub9k.css';
import '../../css/b/bstijcuuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k za-y1svgo"/><path class="khw2__bqg wm-a"/><path class="lo43kub9k wm-k"/><path class="bstijcuuk wm-a"/></g>`,
		"fallback": "withicons:strikethrough-sketch",
	});
}

export default Component;
