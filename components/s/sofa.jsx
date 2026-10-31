import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d-p3y_b6o.css';
import '../../css/s/sssy2vs5w.css';
import '../../css/a/arvqk2baz.css';
import '../../css/p/pcha28t2f.css';
import '../../css/r/rc6w_h-ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d-p3y_b6o wm-shadow"/><path class="sssy2vs5w"/><path class="arvqk2baz"/><path class="pcha28t2f"/><path class="rc6w_h-ad"/></g>`,
		"fallback": "withicons-retro:sofa",
	});
}

export default Component;
