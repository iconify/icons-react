import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/warcivyll.css';
import '../../css/e/enm7i5b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="warcivyll"/><path class="enm7i5b_d"/></g>`,
		"fallback": "tabler:photo-dollar",
	});
}

export default Component;
