import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k07n6zrtr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k07n6zrtr"/>`,
		"fallback": "f7:rectangle-grid-3x2",
	});
}

export default Component;
