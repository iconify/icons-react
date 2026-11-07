import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7xbov04v.css';
import '../../css/j/js3kafi8v.css';
import '../../css/h/h4bi2xbtu.css';
import '../../css/s/szsqnlb_n.css';
import '../../css/j/j4a_sbhlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7xbov04v"/><path class="js3kafi8v"/><path class="h4bi2xbtu"/><path class="szsqnlb_n"/><path class="j4a_sbhlt"/>`,
		"fallback": "solar:magnet-wave-bold",
	});
}

export default Component;
