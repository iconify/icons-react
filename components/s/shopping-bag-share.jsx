import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/klnypkk6r.css';
import '../../css/a/akr_y1vyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="klnypkk6r"/><path class="akr_y1vyu"/></g>`,
		"fallback": "tabler:shopping-bag-share",
	});
}

export default Component;
