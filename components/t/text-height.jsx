import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp_4ch6qg.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp_4ch6qg"/>`,
		"fallback": "fa:text-height",
	});
}

export default Component;
