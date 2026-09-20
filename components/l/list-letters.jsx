import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odlcg8hjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odlcg8hjd"/>`,
		"fallback": "tabler:list-letters",
	});
}

export default Component;
