import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i86vmwb3r.css';
import '../../css/c/cogmg3blm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i86vmwb3r"/><path class="cogmg3blm"/>`,
		"fallback": "selfhst:streamystats-light",
	});
}

export default Component;
