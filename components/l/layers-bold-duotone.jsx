import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3vb0177b.css';
import '../../css/n/nvazcab2q.css';
import '../../css/l/lh00_hb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3vb0177b"/><path class="nvazcab2q"/><path class="lh00_hb_l"/>`,
		"fallback": "solar:layers-bold-duotone",
	});
}

export default Component;
