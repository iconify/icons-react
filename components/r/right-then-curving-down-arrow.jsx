import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c29fr0bdg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c29fr0bdg"/>`,
		"fallback": "dinkie-icons:right-then-curving-down-arrow",
	});
}

export default Component;
