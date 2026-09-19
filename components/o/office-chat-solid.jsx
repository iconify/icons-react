import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbtywiw6h.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbtywiw6h"/>`,
		"fallback": "fluent-mdl2:office-chat-solid",
	});
}

export default Component;
