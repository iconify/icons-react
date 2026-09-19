import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zlhx_k8hm.css';
import '../../css/r/rdrjm9xca.css';
import '../../css/w/w15s4acvm.css';
import '../../css/w/wpzsozb_d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="zlhx_k8hm"/><path class="rdrjm9xca"/><path class="w15s4acvm"/><path class="wpzsozb_d"/></g>`,
		"fallback": "icon-park:mindmap-map",
	});
}

export default Component;
