import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqc2gxb6p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqc2gxb6p"/>`,
		"fallback": "selfhst:nextpvr-light",
	});
}

export default Component;
