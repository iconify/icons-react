import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry8edhbmf.css';
import '../../css/p/ps1262b5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry8edhbmf"/><path class="ps1262b5v"/>`,
		"fallback": "selfhst:oak-identity-light",
	});
}

export default Component;
