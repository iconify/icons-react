import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqwkt9bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqwkt9bhn"/>`,
		"fallback": "cbi:starlink",
	});
}

export default Component;
