import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq5wtgblw.css';
import '../../css/c/cxplgm_hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq5wtgblw"/><path clip-rule="evenodd" class="cxplgm_hu"/>`,
		"fallback": "token:obvious",
	});
}

export default Component;
