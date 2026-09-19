import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6h5_0rkk.css';
import '../../css/b/bad9hsb7u.css';
import '../../css/u/u5zh478xf.css';
import '../../css/r/r1f-5mb-b.css';
import '../../css/f/fduciibru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i6h5_0rkk"/><path class="bad9hsb7u"/><rect class="u5zh478xf"/><path class="r1f-5mb-b"/><circle transform="matrix(0 -1 -1 0 10 14)" class="fduciibru"/><circle transform="matrix(0 -1 -1 0 16 14)" class="fduciibru"/></g>`,
		"fallback": "icon-park-outline:locking-web",
	});
}

export default Component;
