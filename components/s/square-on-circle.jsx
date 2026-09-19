import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djer2lbzq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djer2lbzq"/>`,
		"fallback": "f7:square-on-circle",
	});
}

export default Component;
