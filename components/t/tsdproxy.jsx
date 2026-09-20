import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl35fttde.css';
import '../../css/v/vv1q87bgh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yl35fttde"/><path class="vv1q87bgh"/>`,
		"fallback": "selfhst:tsdproxy",
	});
}

export default Component;
