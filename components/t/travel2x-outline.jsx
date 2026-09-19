import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ndghrl6cw.css';
import '../../css/h/hpxcg_b0l.css';
import '../../css/z/zsxrt0eic.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ndghrl6cw"/><path class="hpxcg_b0l"/><path class="zsxrt0eic"/></g>`,
		"fallback": "healthicons:travel2x-outline",
	});
}

export default Component;
