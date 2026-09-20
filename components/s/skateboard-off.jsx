import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr5ftn4xq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr5ftn4xq"/>`,
		"fallback": "tabler:skateboard-off",
	});
}

export default Component;
