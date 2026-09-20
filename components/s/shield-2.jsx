import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll5w1cbvc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll5w1cbvc"/>`,
		"fallback": "streamline:shield-2",
	});
}

export default Component;
