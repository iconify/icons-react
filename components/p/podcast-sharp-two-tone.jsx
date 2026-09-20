import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/is9k_idfr.css';
import '../../css/i/igs6bnbke.css';
import '../../css/k/kil06obbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="is9k_idfr"/><path class="igs6bnbke"/><path class="kil06obbz"/></g>`,
		"fallback": "keyline-icons:podcast-sharp-two-tone",
	});
}

export default Component;
