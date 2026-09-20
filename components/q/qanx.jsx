import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgb8wkb_n.css';
import '../../css/v/vpvf7rb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgb8wkb_n"/><path class="vpvf7rb6a"/>`,
		"fallback": "token:qanx",
	});
}

export default Component;
