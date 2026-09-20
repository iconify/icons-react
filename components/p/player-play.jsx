import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acuv0nkdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acuv0nkdc"/>`,
		"fallback": "tabler:player-play",
	});
}

export default Component;
