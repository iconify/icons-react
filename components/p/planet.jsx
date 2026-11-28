import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-9te6b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-9te6b6s"/>`,
		"fallback": "noviair:planet",
	});
}

export default Component;
