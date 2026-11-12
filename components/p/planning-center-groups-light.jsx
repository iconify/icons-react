import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djbel3bjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djbel3bjj"/>`,
		"fallback": "selfhst:planning-center-groups-light",
	});
}

export default Component;
