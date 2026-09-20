import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7qn3oxgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7qn3oxgj"/>`,
		"fallback": "tabler:transition-right",
	});
}

export default Component;
