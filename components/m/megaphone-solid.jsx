import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrrqncb9n.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrrqncb9n"/>`,
		"fallback": "fluent-mdl2:megaphone-solid",
	});
}

export default Component;
