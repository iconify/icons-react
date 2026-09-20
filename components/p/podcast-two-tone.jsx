import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/za979ab-x.css';
import '../../css/m/mfn_rnb_z.css';
import '../../css/k/kil06obbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="za979ab-x"/><path class="mfn_rnb_z"/><path class="kil06obbz"/></g>`,
		"fallback": "keyline-icons:podcast-two-tone",
	});
}

export default Component;
