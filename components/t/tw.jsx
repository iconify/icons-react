import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekamw6x8t.css';
import '../../css/p/pc_jj8btf.css';
import '../../css/v/v_2jvdpvu.css';
import '../../css/f/fac6njuzs.css';

const viewBox = {"width":300,"height":200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ekamw6x8t"/><path class="pc_jj8btf"/><circle class="v_2jvdpvu"/><path class="fac6njuzs"/></g>`,
		"fallback": "cif:tw",
	});
}

export default Component;
