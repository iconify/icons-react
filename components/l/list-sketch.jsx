import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n1es_rwco.css';
import '../../css/z/zso6h7bac.css';
import '../../css/a/a5_my2x1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="n1es_rwco wm-k"/><path class="wm-k zso6h7bac"/><path class="a5_my2x1o wm-a"/></g>`,
		"fallback": "withicons:list-sketch",
	});
}

export default Component;
