import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/suejygdzx.css';
import '../../css/w/w4bs5abkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="suejygdzx"/><path class="w4bs5abkg"/></g>`,
		"fallback": "tabler:ufo-off",
	});
}

export default Component;
