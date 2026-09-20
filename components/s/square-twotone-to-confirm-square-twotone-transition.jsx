import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6sxug.css';
import '../../css/i/iw1iew.css';
import '../../css/f/fce2zc.css';
import '../../css/s/so-from-14.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6sxug iw1iew"/><path class="fce2zc iw1iew"/>`,
		"fallback": "line-md:square-twotone-to-confirm-square-twotone-transition",
	});
}

export default Component;
