import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r43v05j1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r43v05j1v"/>`,
		"fallback": "tabler:pennant-2-filled",
	});
}

export default Component;
