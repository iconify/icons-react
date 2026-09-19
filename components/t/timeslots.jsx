import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_1_ebbny.css';

const viewBox = {"width":2080,"height":1504};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_1_ebbny"/>`,
		"fallback": "vs:timeslots",
	});
}

export default Component;
