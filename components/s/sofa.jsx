import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxid2bbwl.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxid2bbwl"/>`,
		"fallback": "picon:sofa",
	});
}

export default Component;
