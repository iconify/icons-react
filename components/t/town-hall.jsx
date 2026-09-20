import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg0rhxb-u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg0rhxb-u"/>`,
		"fallback": "maki:town-hall",
	});
}

export default Component;
