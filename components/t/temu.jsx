import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm8pbtlmi.css';
import '../../css/l/liz4x11yp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pm8pbtlmi"/><path class="liz4x11yp"/>`,
		"fallback": "selfhst:temu",
	});
}

export default Component;
