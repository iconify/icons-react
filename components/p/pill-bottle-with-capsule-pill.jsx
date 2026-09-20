import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzx--cc9h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzx--cc9h"/>`,
		"fallback": "pinhead:pill-bottle-with-capsule-pill",
	});
}

export default Component;
