import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnmc9_k6s.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnmc9_k6s"/>`,
		"fallback": "whh:squareeight",
	});
}

export default Component;
