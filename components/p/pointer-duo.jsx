import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq1h-tb3p.css';
import '../../css/a/aks_g7bnk.css';
import '../../css/t/tpc2hyhei.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wq1h-tb3p"/><path class="aks_g7bnk"/><path class="tpc2hyhei"/></g>`,
		"fallback": "streamline-kameleon-color:pointer-duo",
	});
}

export default Component;
