import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1jhk9bhy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1jhk9bhy"/>`,
		"fallback": "fluent-mdl2:video-off-2",
	});
}

export default Component;
