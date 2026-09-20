import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypft5mbdm.css';
import '../../css/v/vm4551bzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypft5mbdm"/><path class="vm4551bzs"/>`,
		"fallback": "si:phone-add-call-fill",
	});
}

export default Component;
