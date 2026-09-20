import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap95lub3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap95lub3z"/>`,
		"fallback": "tabler:vector-bezier-circle",
	});
}

export default Component;
