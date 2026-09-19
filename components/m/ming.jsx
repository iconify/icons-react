import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm41t744z.css';

const viewBox = {"width":464,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm41t744z"/>`,
		"fallback": "ps:ming",
	});
}

export default Component;
