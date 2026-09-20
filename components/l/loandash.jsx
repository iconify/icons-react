import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb7cspbhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb7cspbhg"/>`,
		"fallback": "selfhst:loandash",
	});
}

export default Component;
