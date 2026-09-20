import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mybu-2pkf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mybu-2pkf"/>`,
		"fallback": "selfhst:opensuse",
	});
}

export default Component;
