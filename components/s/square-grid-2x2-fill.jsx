import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvugenbvv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvugenbvv"/>`,
		"fallback": "f7:square-grid-2x2-fill",
	});
}

export default Component;
