import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8ke5gh1a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8ke5gh1a"/>`,
		"fallback": "fluent-mdl2:open-in-new-tab",
	});
}

export default Component;
