import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lpbpumbgd.css';
import '../../css/f/flp6ugnrw.css';
import '../../css/a/ajk_qvbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="lpbpumbgd"/><circle class="flp6ugnrw"/><path class="ajk_qvbds"/></g>`,
		"fallback": "hugeicons:locate-fixed",
	});
}

export default Component;
