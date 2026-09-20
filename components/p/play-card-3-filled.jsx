import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1fbskhtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1fbskhtl"/>`,
		"fallback": "tabler:play-card-3-filled",
	});
}

export default Component;
