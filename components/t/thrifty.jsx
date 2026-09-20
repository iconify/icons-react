import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4-vtpbnb.css';
import '../../css/x/xtnibnbva.css';
import '../../css/h/hn9ztn5zb.css';
import '../../css/a/aszoa8b8w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4-vtpbnb"/><path class="xtnibnbva"/><path class="hn9ztn5zb"/><path class="aszoa8b8w"/>`,
		"fallback": "selfhst:thrifty",
	});
}

export default Component;
