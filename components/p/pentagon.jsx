import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ori6x2u_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ori6x2u_a"/>`,
		"fallback": "akar-icons:pentagon",
	});
}

export default Component;
