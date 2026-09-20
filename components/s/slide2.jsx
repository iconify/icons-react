import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyis771pa.css';
import '../../css/k/kfc9attts.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyis771pa"/><path class="kfc9attts"/>`,
		"fallback": "temaki:slide2",
	});
}

export default Component;
