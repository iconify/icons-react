import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6valsw2k.css';
import '../../css/y/ypft5mbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6valsw2k"/><path class="ypft5mbdm"/>`,
		"fallback": "si:phone-forwarded-fill",
	});
}

export default Component;
