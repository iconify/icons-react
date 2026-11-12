import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2urnglye.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2urnglye"/>`,
		"fallback": "selfhst:itsm-ng-dark",
	});
}

export default Component;
