import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/i/ihytzob7q.css';
import '../../css/a/a06xqyb5h.css';
import '../../css/u/uggadp-bv.css';
import '../../css/a/adh5jlbah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="ihytzob7q"/><path class="a06xqyb5h"/><path class="uggadp-bv"/><path class="adh5jlbah"/>`,
		"fallback": "solar:reorder-bold-duotone",
	});
}

export default Component;
