import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moj3q8fhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moj3q8fhq"/>`,
		"fallback": "selfhst:tpdb-light",
	});
}

export default Component;
