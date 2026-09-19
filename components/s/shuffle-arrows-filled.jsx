import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtoqlkbei.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtoqlkbei"/>`,
		"fallback": "dinkie-icons:shuffle-arrows-filled",
	});
}

export default Component;
