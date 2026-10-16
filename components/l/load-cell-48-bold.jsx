import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_qrf6bex.css';
import '../../css/b/bwg811bpd.css';
import '../../css/o/orqjejdjp.css';
import '../../css/v/vlrk2yboz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_qrf6bex"/><path class="bwg811bpd"/><path class="orqjejdjp"/><path class="vlrk2yboz"/>`,
		"fallback": "energy-icons:load-cell-48-bold",
	});
}

export default Component;
