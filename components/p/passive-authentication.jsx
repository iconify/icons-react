import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5pi2f--g.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5pi2f--g"/>`,
		"fallback": "fluent-mdl2:passive-authentication",
	});
}

export default Component;
