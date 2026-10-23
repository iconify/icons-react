import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auseovn_l.css';
import '../../css/l/ld2_u3-wt.css';
import '../../css/t/tld6labme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="auseovn_l"/><path class="ld2_u3-wt"/><path class="tld6labme"/></g>`,
		"fallback": "andrsrxn:lemon",
	});
}

export default Component;
