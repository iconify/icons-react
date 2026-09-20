import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2q96ob3h.css';
import '../../css/c/chkx1ht5g.css';
import '../../css/z/z8b5qr7pd.css';
import '../../css/w/wykbqxbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v2q96ob3h"/><rect class="chkx1ht5g"/><path class="z8b5qr7pd"/><circle class="wykbqxbhn"/></g>`,
		"fallback": "lets-icons:money-duotone-line",
	});
}

export default Component;
