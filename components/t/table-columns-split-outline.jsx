import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fly9otqib.css';
import '../../css/g/ggztb9bes.css';
import '../../css/k/k_gu13b6s.css';
import '../../css/q/qv07b1bbr.css';
import '../../css/o/ol11kpbfc.css';
import '../../css/g/gcctpwkja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fly9otqib"/><path clip-rule="evenodd" class="ggztb9bes"/><path class="k_gu13b6s"/><path class="qv07b1bbr"/><path class="ol11kpbfc"/><path class="gcctpwkja"/>`,
		"fallback": "solar:table-columns-split-outline",
	});
}

export default Component;
