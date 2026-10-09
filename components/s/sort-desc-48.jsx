import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhifx_scc.css';
import '../../css/g/gyvla6x2p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhifx_scc"/><path class="gyvla6x2p"/>`,
		"fallback": "energy-icons:sort-desc-48",
	});
}

export default Component;
