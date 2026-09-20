import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/texztqb2i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="texztqb2i"/>`,
		"fallback": "selfhst:valhalla-maps-dark",
	});
}

export default Component;
