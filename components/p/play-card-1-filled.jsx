import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5p-dwbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5p-dwbes"/>`,
		"fallback": "tabler:play-card-1-filled",
	});
}

export default Component;
