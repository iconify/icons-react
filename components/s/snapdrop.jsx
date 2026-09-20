import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm7nfqbtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm7nfqbtw"/>`,
		"fallback": "thesvg-color:snapdrop",
	});
}

export default Component;
