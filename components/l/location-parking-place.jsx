import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6n6555no.css';
import '../../css/b/bsqx4bc-w.css';
import '../../css/k/kdzjgrcdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e6n6555no"/><path class="bsqx4bc-w"/><path class="kdzjgrcdu"/></g>`,
		"fallback": "tdesign:location-parking-place",
	});
}

export default Component;
