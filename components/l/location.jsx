import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex619chfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex619chfu"/>`,
		"fallback": "tabler:location",
	});
}

export default Component;
