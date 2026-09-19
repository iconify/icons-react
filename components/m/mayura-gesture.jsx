import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/ayn2_qbyg.css';
import '../../css/i/iaagr_7_e.css';
import '../../css/g/gj4zck10w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ayn2_qbyg"/><path class="iaagr_7_e"/><path class="gj4zck10w"/></g>`,
		"fallback": "icon-park:mayura-gesture",
	});
}

export default Component;
