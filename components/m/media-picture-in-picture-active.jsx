import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw6-ov3tm.css';
import '../../css/l/liz26ccin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lw6-ov3tm"/><path class="liz26ccin"/>`,
		"fallback": "nrk:media-picture-in-picture-active",
	});
}

export default Component;
