import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-jd97b7f.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-jd97b7f"/>`,
		"fallback": "map:lawyer",
	});
}

export default Component;
