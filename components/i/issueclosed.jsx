import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewcz29bky.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewcz29bky"/>`,
		"fallback": "whh:issueclosed",
	});
}

export default Component;
