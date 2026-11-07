import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b79n94itr.css';
import '../../css/o/oozdlvhnc.css';
import '../../css/p/poha9717f.css';
import '../../css/u/u0-f0qbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b79n94itr"/><path class="oozdlvhnc"/><path class="poha9717f"/><path class="u0-f0qbaf"/>`,
		"fallback": "solar:smart-home-outline",
	});
}

export default Component;
