import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc34sgq8u.css';
import '../../css/h/hbw3jz6bp.css';
import '../../css/j/j-667kb4n.css';
import '../../css/s/sm1_hto_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc34sgq8u"/><path class="hbw3jz6bp"/><path class="j-667kb4n"/><path class="sm1_hto_o"/>`,
		"fallback": "energy-icons:qr-code-48-bold",
	});
}

export default Component;
