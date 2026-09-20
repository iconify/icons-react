import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa761w5ag.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa761w5ag"/>`,
		"fallback": "selfhst:unbound-light",
	});
}

export default Component;
