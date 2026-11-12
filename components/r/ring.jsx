import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yro947b0c.css';
import '../../css/l/lhh1z-yfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yro947b0c"/><circle class="lhh1z-yfw"/>`,
		"fallback": "selfhst:ring",
	});
}

export default Component;
