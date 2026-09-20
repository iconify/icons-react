import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djkyirbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djkyirbhf"/>`,
		"fallback": "tabler:letter-n-small",
	});
}

export default Component;
