import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asrsfxb5s.css';
import '../../css/m/mepmou5ny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asrsfxb5s"/><path class="mepmou5ny"/>`,
		"fallback": "ion:md-pizza",
	});
}

export default Component;
