import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfj52-bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfj52-bfm"/>`,
		"fallback": "cbi:lg-signiture",
	});
}

export default Component;
