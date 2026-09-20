import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug7066bwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ug7066bwl"/>`,
		"fallback": "selfhst:vince-light",
	});
}

export default Component;
