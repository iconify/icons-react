import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vki2y12ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vki2y12ib"/>`,
		"fallback": "noviair:list-play",
	});
}

export default Component;
