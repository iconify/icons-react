import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r61cogx2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r61cogx2x"/>`,
		"fallback": "selfhst:oracle-light",
	});
}

export default Component;
