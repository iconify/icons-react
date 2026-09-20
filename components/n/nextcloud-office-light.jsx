import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df2i0cbrv.css';
import '../../css/m/m0c34ebvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="df2i0cbrv"/><path clip-rule="evenodd" class="m0c34ebvb"/>`,
		"fallback": "selfhst:nextcloud-office-light",
	});
}

export default Component;
