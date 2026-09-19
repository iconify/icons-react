import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kccz5db_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kccz5db_i"/>`,
		"fallback": "griddy-icons:tool-alt-filled",
	});
}

export default Component;
