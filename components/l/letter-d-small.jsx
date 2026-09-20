import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2-v6rp2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2-v6rp2d"/>`,
		"fallback": "tabler:letter-d-small",
	});
}

export default Component;
