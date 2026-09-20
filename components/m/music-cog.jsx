import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk88anb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk88anb7y"/>`,
		"fallback": "tabler:music-cog",
	});
}

export default Component;
