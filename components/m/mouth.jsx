import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2ombubsn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2ombubsn"/>`,
		"fallback": "dinkie-icons:mouth",
	});
}

export default Component;
