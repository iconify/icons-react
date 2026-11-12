import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwah2sb9a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwah2sb9a"/>`,
		"fallback": "selfhst:relic-storage-dark",
	});
}

export default Component;
