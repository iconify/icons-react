import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnmy-k-kq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnmy-k-kq"/>`,
		"fallback": "streamline-sharp:target-3",
	});
}

export default Component;
