import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe0nt0wqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe0nt0wqp"/>`,
		"fallback": "tabler:number-23-small",
	});
}

export default Component;
