import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgw988bsm.css';
import '../../css/g/gn5j3-b2t.css';
import '../../css/u/u11od-bgv.css';
import '../../css/f/fzy27luea.css';
import '../../css/e/ejk1ck6md.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgw988bsm"/><path class="gn5j3-b2t"/><path class="u11od-bgv"/><path class="fzy27luea"/><path class="ejk1ck6md"/>`,
		"fallback": "selfhst:mini-qr",
	});
}

export default Component;
