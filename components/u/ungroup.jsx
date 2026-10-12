import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3erz0bos.css';
import '../../css/p/pmd_icbaj.css';
import '../../css/m/mee-cvixx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="j3erz0bos"/><rect class="pmd_icbaj"/><rect class="mee-cvixx"/></g>`,
		"fallback": "andrsrxn:ungroup",
	});
}

export default Component;
