import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phsw2obgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phsw2obgc"/>`,
		"fallback": "tabler:time-duration-15",
	});
}

export default Component;
