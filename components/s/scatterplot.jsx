import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwb7h4upf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwb7h4upf"/>`,
		"fallback": "ix:scatterplot",
	});
}

export default Component;
