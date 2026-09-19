import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8fkkvm0d.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8fkkvm0d"/>`,
		"fallback": "zmdi:wallpaper",
	});
}

export default Component;
