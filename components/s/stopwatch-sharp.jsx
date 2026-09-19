import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iuvg6_w_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iuvg6_w_p"/>`,
		"fallback": "ion:stopwatch-sharp",
	});
}

export default Component;
