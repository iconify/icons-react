import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opos94p9c.css';
import '../../css/o/o42lp8b_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opos94p9c"/><path class="o42lp8b_u"/>`,
		"fallback": "tdesign:map-grid-filled",
	});
}

export default Component;
