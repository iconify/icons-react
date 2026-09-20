import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh4z5kbri.css';
import '../../css/y/y2a9lnbzu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vh4z5kbri"/><circle class="y2a9lnbzu"/>`,
		"fallback": "selfhst:livinity",
	});
}

export default Component;
