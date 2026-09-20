import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shya_ld1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shya_ld1v"/>`,
		"fallback": "selfhst:itsm-ng-light",
	});
}

export default Component;
