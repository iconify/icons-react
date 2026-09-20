import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib6mbs-7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib6mbs-7w"/>`,
		"fallback": "selfhst:opensuse-tumbleweed-light",
	});
}

export default Component;
