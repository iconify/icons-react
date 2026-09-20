import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqky6zbfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqky6zbfq"/>`,
		"fallback": "thesvg-color:scan",
	});
}

export default Component;
