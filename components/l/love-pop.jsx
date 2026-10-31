import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ei3ecxn7v.css';
import '../../css/k/k08duhbay.css';
import '../../css/t/tx2owcchn.css';
import '../../css/o/oueqddceg.css';
import '../../css/e/egmcd21za.css';
import '../../css/g/glwaotbjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ei3ecxn7v"/><path class="k08duhbay"/><path class="tx2owcchn"/><path class="oueqddceg"/><path class="egmcd21za"/><path clip-rule="evenodd" class="glwaotbjx"/></g>`,
		"fallback": "streamline-kameleon-color:love-pop",
	});
}

export default Component;
