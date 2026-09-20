import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5susob-d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5susob-d"/>`,
		"fallback": "streamline:phone-ringing-2",
	});
}

export default Component;
