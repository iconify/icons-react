import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pz43xhblp.css';
import '../../css/c/c38arbcur.css';
import '../../css/n/njxkp0atg.css';
import '../../css/b/b_6489u2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pz43xhblp"/><path class="c38arbcur"/><path class="njxkp0atg"/><path class="b_6489u2t"/></g>`,
		"fallback": "solar:trellis-broken",
	});
}

export default Component;
