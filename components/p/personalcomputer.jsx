import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx3gkxbke.css';
import '../../css/g/glp0gj3np.css';
import '../../css/h/h1_nyg4fd.css';
import '../../css/c/cup21hfki.css';
import '../../css/k/kg2his8pd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx3gkxbke"/><path class="glp0gj3np"/><path class="h1_nyg4fd"/><circle class="cup21hfki"/><path class="kg2his8pd"/>`,
		"fallback": "fxemoji:personalcomputer",
	});
}

export default Component;
