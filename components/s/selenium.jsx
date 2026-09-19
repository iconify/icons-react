import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaw774b1y.css';
import '../../css/b/bjy9zyb1r.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaw774b1y"/><path class="bjy9zyb1r"/>`,
		"fallback": "devicon:selenium",
	});
}

export default Component;
