import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhl3a5t6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhl3a5t6v"/>`,
		"fallback": "tabler:subtitles",
	});
}

export default Component;
