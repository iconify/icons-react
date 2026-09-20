import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9dv-pbfn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9dv-pbfn"/>`,
		"fallback": "selfhst:voron-light",
	});
}

export default Component;
