import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfwme05gv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfwme05gv"/>`,
		"fallback": "selfhst:irs-dark",
	});
}

export default Component;
