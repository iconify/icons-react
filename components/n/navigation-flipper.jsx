import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvujvo0-s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvujvo0-s"/>`,
		"fallback": "fluent-mdl2:navigation-flipper",
	});
}

export default Component;
