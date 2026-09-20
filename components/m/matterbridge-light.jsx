import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp9-fhbrs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp9-fhbrs"/>`,
		"fallback": "selfhst:matterbridge-light",
	});
}

export default Component;
