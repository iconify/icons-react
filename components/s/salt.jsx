import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dz_ifac2a.css';
import '../../css/i/ij3i2rbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dz_ifac2a"/><path class="ij3i2rbnv"/></g>`,
		"fallback": "tabler:salt",
	});
}

export default Component;
