import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3h98r3ne.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3h98r3ne"/>`,
		"fallback": "dinkie-icons:otfeature-frac-small-filled",
	});
}

export default Component;
