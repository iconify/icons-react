import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fquvxvb-f.css';
import '../../css/m/mcmh-2bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fquvxvb-f"/><path class="mcmh-2bxk"/></g>`,
		"fallback": "tabler:perfume",
	});
}

export default Component;
