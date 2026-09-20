import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bji8i1b_f.css';
import '../../css/z/z-imr2beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bji8i1b_f"/><path class="z-imr2beg"/>`,
		"fallback": "pixel:retro-camera",
	});
}

export default Component;
