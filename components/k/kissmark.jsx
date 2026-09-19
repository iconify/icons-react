import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p19pb4brm.css';
import '../../css/b/bm_a0o4dd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p19pb4brm"/><path class="bm_a0o4dd"/>`,
		"fallback": "fxemoji:kissmark",
	});
}

export default Component;
