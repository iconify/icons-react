import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3_gtob6t.css';
import '../../css/b/bz0qnvbjd.css';
import '../../css/x/xc6fu6b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3_gtob6t"/><path class="bz0qnvbjd"/><path clip-rule="evenodd" class="xc6fu6b1d"/>`,
		"fallback": "solar:video-library-bold",
	});
}

export default Component;
