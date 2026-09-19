import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaie1r4rd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaie1r4rd"/>`,
		"fallback": "dinkie-icons:uni7981-box-filled",
	});
}

export default Component;
