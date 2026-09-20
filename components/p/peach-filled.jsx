import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp2g-og5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp2g-og5y"/>`,
		"fallback": "tdesign:peach-filled",
	});
}

export default Component;
