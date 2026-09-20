import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/opuzw1uwx.css';
import '../../css/q/qno0y1lhe.css';
import '../../css/h/hl9wkibvl.css';
import '../../css/o/o_k9s9bkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="opuzw1uwx"/><path class="qno0y1lhe"/><path clip-rule="evenodd" class="hl9wkibvl"/><path class="o_k9s9bkt"/></g>`,
		"fallback": "streamline-plump-color:shipment-upload-flat",
	});
}

export default Component;
