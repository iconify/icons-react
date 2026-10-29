import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/djiqt-b-p.css';
import '../../css/k/kv-kaou7x.css';
import '../../css/p/prty8wg5d.css';
import '../../css/e/emha3wbqe.css';
import '../../css/p/p65k-7b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="djiqt-b-p wm-k"/><path class="kv-kaou7x wm-s"/><path class="prty8wg5d wm-shadow"/><path class="emha3wbqe wm-k"/><path class="p65k-7b9s wm-s"/></g>`,
		"fallback": "withicons:user-x-engrave",
	});
}

export default Component;
