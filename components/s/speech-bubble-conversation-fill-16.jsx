import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e54sm5b4g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e54sm5b4g"/>`,
		"fallback": "garden:speech-bubble-conversation-fill-16",
	});
}

export default Component;
