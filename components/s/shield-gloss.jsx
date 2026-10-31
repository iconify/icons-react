import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puds2jauh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puds2jauh"/>`,
		"fallback": "withicons:shield-gloss",
	});
}

export default Component;
