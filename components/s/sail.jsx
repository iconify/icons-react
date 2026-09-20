import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o12k-dbaa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o12k-dbaa"/>`,
		"fallback": "temaki:sail",
	});
}

export default Component;
