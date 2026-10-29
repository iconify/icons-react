import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uivb_ubdk.css';
import '../../css/v/v55zsebyu.css';
import '../../css/q/q6z6ai9lv.css';
import '../../css/v/vkq-kzxjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uivb_ubdk"/><path class="v55zsebyu wm-a"/><path class="q6z6ai9lv wm-k"/><path class="vkq-kzxjk wm-a"/></g>`,
		"fallback": "withicons:pencil-ruler-sketch",
	});
}

export default Component;
