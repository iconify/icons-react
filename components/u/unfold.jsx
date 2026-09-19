import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg0sx-fay.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg0sx-fay"/>`,
		"fallback": "codicon:unfold",
	});
}

export default Component;
