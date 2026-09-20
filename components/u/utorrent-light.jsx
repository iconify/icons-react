import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksc5z13bv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksc5z13bv"/>`,
		"fallback": "selfhst:utorrent-light",
	});
}

export default Component;
