import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quqkdstdb.css';
import '../../css/a/a7qf29bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quqkdstdb"/><path class="a7qf29bcu"/>`,
		"fallback": "solar:square-alt-arrow-up-bold-duotone",
	});
}

export default Component;
