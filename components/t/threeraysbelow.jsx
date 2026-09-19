import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5i0m2t_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5i0m2t_s"/>`,
		"fallback": "fxemoji:threeraysbelow",
	});
}

export default Component;
