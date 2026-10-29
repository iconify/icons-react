import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v3xxggbuv.css';
import '../../css/f/fngyexhig.css';
import '../../css/d/d6r7_2bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v3xxggbuv"/><path class="fngyexhig wm-k"/><path class="d6r7_2bbn wm-k"/></g>`,
		"fallback": "withicons:list-filter-sketch",
	});
}

export default Component;
