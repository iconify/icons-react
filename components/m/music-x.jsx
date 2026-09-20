import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tygr07bdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tygr07bdr"/>`,
		"fallback": "tabler:music-x",
	});
}

export default Component;
