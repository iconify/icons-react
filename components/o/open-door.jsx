import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/r/r-qclcbiq.css';
import '../../css/d/d1igh63-p.css';
import '../../css/k/kxc2n7muj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="r-qclcbiq"/><path clip-rule="evenodd" class="d1igh63-p"/><path class="kxc2n7muj"/></g>`,
		"fallback": "icon-park:open-door",
	});
}

export default Component;
