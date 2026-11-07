import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqe4w3b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqe4w3b7p"/>`,
		"fallback": "solar:radar-2-broken",
	});
}

export default Component;
