import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htib2p0us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htib2p0us"/>`,
		"fallback": "matita:phi",
	});
}

export default Component;
