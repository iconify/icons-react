import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pt3d0vbmk.css';
import '../../css/f/fla5zxb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pt3d0vbmk"/><path class="fla5zxb_t"/></g>`,
		"fallback": "tabler:photo-off",
	});
}

export default Component;
