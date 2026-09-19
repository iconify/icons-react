import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik1pfo3tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik1pfo3tm"/>`,
		"fallback": "hugeicons:peer-to-peer-02",
	});
}

export default Component;
