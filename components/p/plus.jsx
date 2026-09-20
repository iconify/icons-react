import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5hbqvx0k.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5hbqvx0k"/>`,
		"fallback": "marketeq:plus",
	});
}

export default Component;
