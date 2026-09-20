import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkdv9v2zu.css';
import '../../css/s/sa0j-91uu.css';
import '../../css/r/r04to0b6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkdv9v2zu"/><path class="sa0j-91uu"/><path class="r04to0b6d"/>`,
		"fallback": "selfhst:minthcm-light",
	});
}

export default Component;
