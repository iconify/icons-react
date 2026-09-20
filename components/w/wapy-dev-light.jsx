import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faf4xenwi.css';
import '../../css/v/ve_vwubck.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faf4xenwi"/><path class="ve_vwubck"/>`,
		"fallback": "selfhst:wapy-dev-light",
	});
}

export default Component;
