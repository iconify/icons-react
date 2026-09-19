import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/scphptf-o.css';
import '../../css/l/la8m58bfy.css';
import '../../css/t/tqe_27bdm.css';
import '../../css/r/r8qxbubov.css';
import '../../css/h/h5x1akbnm.css';
import '../../css/s/sgn3ypbdf.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGBYpbQbcs"><path class="scphptf-o"/><path class="la8m58bfy"/><path class="tqe_27bdm"/><circle class="r8qxbubov"/><circle class="h5x1akbnm"/><circle class="sgn3ypbdf"/></mask></defs><path mask="url(#SVGBYpbQbcs)" class="w49j0rbvv"/></g>`,
		"fallback": "bitcoin-icons:printer-outline",
	});
}

export default Component;
