import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq3zh6b0i.css';
import '../../css/f/f8da0bkqt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq3zh6b0i"/><path class="f8da0bkqt"/>`,
		"fallback": "selfhst:proton-mail-light",
	});
}

export default Component;
