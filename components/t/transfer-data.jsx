import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pt03adx-w.css';
import '../../css/u/uawfmsvfl.css';
import '../../css/s/s7q79h02l.css';
import '../../css/s/spu85samc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="pt03adx-w"/><path class="uawfmsvfl"/><path class="s7q79h02l"/><path class="spu85samc"/></g>`,
		"fallback": "icon-park:transfer-data",
	});
}

export default Component;
