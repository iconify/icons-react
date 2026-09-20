import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1uj_r0_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1uj_r0_w"/>`,
		"fallback": "ix:line-cap-flat",
	});
}

export default Component;
