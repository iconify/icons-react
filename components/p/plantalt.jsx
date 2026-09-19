import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an_jw_blg.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an_jw_blg"/>`,
		"fallback": "whh:plantalt",
	});
}

export default Component;
