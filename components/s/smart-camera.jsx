import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja-666b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja-666b0o"/>`,
		"fallback": "cbi:smart-camera",
	});
}

export default Component;
