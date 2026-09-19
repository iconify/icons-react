import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpd4zl64s.css';
import '../../css/w/w9yaz1b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpd4zl64s"/><path class="w9yaz1b7p"/>`,
		"fallback": "boxicons:microwave-oven",
	});
}

export default Component;
