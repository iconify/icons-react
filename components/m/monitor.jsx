import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/t/ttjl0ecfp.css';
import '../../css/v/vce1w3ven.css';
import '../../css/v/vlsgay-ha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="ttjl0ecfp"/><path clip-rule="evenodd" class="vce1w3ven"/><path class="vlsgay-ha"/></g>`,
		"fallback": "icon-park:monitor",
	});
}

export default Component;
