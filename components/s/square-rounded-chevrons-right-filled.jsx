import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smx79xg7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smx79xg7z"/>`,
		"fallback": "tabler:square-rounded-chevrons-right-filled",
	});
}

export default Component;
