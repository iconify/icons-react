import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjma9vazq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjma9vazq"/>`,
		"fallback": "noviair:key-refresh",
	});
}

export default Component;
