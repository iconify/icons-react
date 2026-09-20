import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu_j0cbni.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu_j0cbni"/>`,
		"fallback": "map:synagogue",
	});
}

export default Component;
