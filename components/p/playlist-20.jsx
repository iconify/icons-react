import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2erelhux.css';
import '../../css/r/rs7efhi1z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2erelhux"/><path class="rs7efhi1z"/>`,
		"fallback": "energy-icons:playlist-20",
	});
}

export default Component;
