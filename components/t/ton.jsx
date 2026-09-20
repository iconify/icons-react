import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy13uwzff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy13uwzff"/>`,
		"fallback": "simple-icons:ton",
	});
}

export default Component;
