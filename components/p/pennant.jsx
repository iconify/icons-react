import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sog612b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sog612b3u"/>`,
		"fallback": "tabler:pennant",
	});
}

export default Component;
