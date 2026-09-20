import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3aqtzbmj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3aqtzbmj"/>`,
		"fallback": "selfhst:netlock-rmm-light",
	});
}

export default Component;
