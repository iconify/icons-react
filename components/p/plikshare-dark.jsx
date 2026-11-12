import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdv9p3brn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdv9p3brn"/>`,
		"fallback": "selfhst:plikshare-dark",
	});
}

export default Component;
