import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oky3v059h.css';
import '../../css/f/foe0t-bls.css';
import '../../css/s/ssgiq9b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oky3v059h"/><circle transform="rotate(-180 11 11)" class="foe0t-bls"/><path class="ssgiq9b_o"/></g>`,
		"fallback": "iconamoon:pen-bold",
	});
}

export default Component;
