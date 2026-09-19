import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m17jfv7jg.css';

const viewBox = {"width":464,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m17jfv7jg"/>`,
		"fallback": "ps:technorati",
	});
}

export default Component;
