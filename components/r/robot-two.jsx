import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/v/vp82i6bmg.css';
import '../../css/w/wbev7pbna.css';
import '../../css/a/amfmd727l.css';
import '../../css/f/fkv52firo.css';
import '../../css/e/eia4hzbco.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="vp82i6bmg"/><path class="wbev7pbna"/><circle class="amfmd727l"/><path class="fkv52firo"/><path class="eia4hzbco"/></g>`,
		"fallback": "icon-park:robot-two",
	});
}

export default Component;
