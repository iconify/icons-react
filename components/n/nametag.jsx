import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he0w76bjd.css';
import '../../css/n/n3c1i_dav.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he0w76bjd"/><path class="n3c1i_dav"/>`,
		"fallback": "selfhst:nametag",
	});
}

export default Component;
