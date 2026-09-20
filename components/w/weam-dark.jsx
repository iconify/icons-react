import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa1jthlzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa1jthlzr"/>`,
		"fallback": "selfhst:weam-dark",
	});
}

export default Component;
