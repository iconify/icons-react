import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djvsyh2cq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djvsyh2cq"/>`,
		"fallback": "nimbus:truck",
	});
}

export default Component;
