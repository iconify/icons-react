import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bviinibix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bviinibix"/>`,
		"fallback": "tabler:square-chevrons-up-filled",
	});
}

export default Component;
