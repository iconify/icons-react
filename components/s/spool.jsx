import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb05n6b5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb05n6b5y"/>`,
		"fallback": "noviair:spool",
	});
}

export default Component;
