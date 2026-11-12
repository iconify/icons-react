import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo14xkb9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo14xkb9t"/>`,
		"fallback": "selfhst:mayan-edms",
	});
}

export default Component;
