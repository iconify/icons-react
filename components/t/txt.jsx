import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm3dcyb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm3dcyb6t"/>`,
		"fallback": "tabler:txt",
	});
}

export default Component;
