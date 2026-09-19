import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye_oo_m6x.css';
import '../../css/a/ab89kobbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye_oo_m6x"/><path class="ab89kobbd"/>`,
		"fallback": "boxicons:photo-album",
	});
}

export default Component;
