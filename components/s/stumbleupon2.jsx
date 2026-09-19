import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoh4y3b0d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoh4y3b0d"/>`,
		"fallback": "icomoon-free:stumbleupon2",
	});
}

export default Component;
