import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz_jw2b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz_jw2b8r"/>`,
		"fallback": "simple-icons:qbittorrent",
	});
}

export default Component;
