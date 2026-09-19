import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icacskyay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icacskyay"/>`,
		"fallback": "ion:play-forward-circle-sharp",
	});
}

export default Component;
