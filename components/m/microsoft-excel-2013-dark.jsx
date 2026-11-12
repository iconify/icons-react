import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh1gydbcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh1gydbcz"/>`,
		"fallback": "selfhst:microsoft-excel-2013-dark",
	});
}

export default Component;
