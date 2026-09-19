import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9tks-8da.css';
import '../../css/k/krxdfbb4h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9tks-8da"/><path class="krxdfbb4h"/>`,
		"fallback": "icomoon-free:user-minus",
	});
}

export default Component;
