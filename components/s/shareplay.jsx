import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1_l0smrk.css';
import '../../css/l/l4cnxybxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v1_l0smrk"/><path class="l4cnxybxs"/></g>`,
		"fallback": "tabler:shareplay",
	});
}

export default Component;
