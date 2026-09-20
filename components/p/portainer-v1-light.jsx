import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm1ssabvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm1ssabvx"/>`,
		"fallback": "selfhst:portainer-v1-light",
	});
}

export default Component;
