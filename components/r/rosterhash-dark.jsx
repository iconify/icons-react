import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewgzu34ms.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewgzu34ms"/>`,
		"fallback": "selfhst:rosterhash-dark",
	});
}

export default Component;
