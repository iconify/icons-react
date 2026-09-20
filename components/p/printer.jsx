import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sfdv74bik.css';
import '../../css/m/medbz2b1j.css';
import '../../css/r/rfgv0sb9j.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="rotate(-90 10.5 8.5)" class="bi12bsetm"><path class="sfdv74bik"/><path class="medbz2b1j"/><circle class="rfgv0sb9j"/></g>`,
		"fallback": "system-uicons:printer",
	});
}

export default Component;
