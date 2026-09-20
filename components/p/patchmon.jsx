import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvpxr2b8r.css';
import '../../css/u/u13r1zb_i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvpxr2b8r"/><path class="u13r1zb_i"/>`,
		"fallback": "selfhst:patchmon",
	});
}

export default Component;
