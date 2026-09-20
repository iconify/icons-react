import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/o/ojx5c4b_g.css';
import '../../css/a/axntg8bsa.css';
import '../../css/n/nlxgqqb_u.css';
import '../../css/m/mfda2d1xn.css';
import '../../css/k/kspr8xc2r.css';
import '../../css/c/cb15f1bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ojx5c4b_g"/><path class="axntg8bsa"/><path class="nlxgqqb_u"/><path class="mfda2d1xn"/><path class="kspr8xc2r"/><path class="cb15f1bla"/></g>`,
		"fallback": "streamline-sharp-color:laptop-camera",
	});
}

export default Component;
