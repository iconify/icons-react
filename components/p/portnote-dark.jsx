import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhp86_bjr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhp86_bjr"/>`,
		"fallback": "selfhst:portnote-dark",
	});
}

export default Component;
