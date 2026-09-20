import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnsy5qb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnsy5qb4o"/>`,
		"fallback": "uil:meh",
	});
}

export default Component;
