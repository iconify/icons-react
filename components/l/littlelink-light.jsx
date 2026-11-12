import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-c80ro0i.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/t/tszz_sbaj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGoNspOeJX" x1="110.4" x2="401.6" y1="3.7" y2="508.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="f-c80ro0i"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGoNspOeJX)" class="tszz_sbaj"/>`,
		"fallback": "selfhst:littlelink-light",
	});
}

export default Component;
