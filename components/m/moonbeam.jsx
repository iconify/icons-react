import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs2okpbhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs2okpbhq"/>`,
		"fallback": "token:moonbeam",
	});
}

export default Component;
