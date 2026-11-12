import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t00b9jt-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t00b9jt-d"/>`,
		"fallback": "selfhst:oneuptime-light",
	});
}

export default Component;
