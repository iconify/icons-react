import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqv7gzxhk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqv7gzxhk"/>`,
		"fallback": "cbi:sydney-metro",
	});
}

export default Component;
