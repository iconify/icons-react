import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el3ty7ptn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el3ty7ptn"/>`,
		"fallback": "ion:md-grid",
	});
}

export default Component;
