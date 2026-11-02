import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmd6mmf_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmd6mmf_b"/>`,
		"fallback": "mingcute:t-shirt-2-fill",
	});
}

export default Component;
