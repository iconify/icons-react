import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ydmkld0ak.css';
import '../../css/v/v_8_foz3m.css';
import '../../css/f/femyu-bry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ydmkld0ak"/><path class="v_8_foz3m"/><path class="femyu-bry"/></g>`,
		"fallback": "tabler:transform-point-bottom-right",
	});
}

export default Component;
