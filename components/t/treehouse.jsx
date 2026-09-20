import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp05-dnsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp05-dnsb"/>`,
		"fallback": "thesvg:treehouse",
	});
}

export default Component;
