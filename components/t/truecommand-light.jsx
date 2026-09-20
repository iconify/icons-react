import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjpbhobfj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjpbhobfj"/>`,
		"fallback": "selfhst:truecommand-light",
	});
}

export default Component;
