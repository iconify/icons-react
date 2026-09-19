import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmoz2bcoy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmoz2bcoy"/>`,
		"fallback": "icomoon-free:strikethrough",
	});
}

export default Component;
