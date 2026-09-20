import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs34dhb-s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs34dhb-s"/>`,
		"fallback": "selfhst:kanidm-light",
	});
}

export default Component;
