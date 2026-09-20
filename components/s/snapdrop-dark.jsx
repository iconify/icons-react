import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdnv-n33c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdnv-n33c"/>`,
		"fallback": "selfhst:snapdrop-dark",
	});
}

export default Component;
