import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auo_0gbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auo_0gbnp"/>`,
		"fallback": "cbi:perfect-draft",
	});
}

export default Component;
