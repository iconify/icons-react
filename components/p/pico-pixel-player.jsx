import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzuu6qb5w.css';
import '../../css/z/zjgo95xol.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzuu6qb5w"/><path class="zjgo95xol"/>`,
		"fallback": "selfhst:pico-pixel-player",
	});
}

export default Component;
