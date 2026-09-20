import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qej8iv7_h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qej8iv7_h"/>`,
		"fallback": "teenyicons:layers-difference-outline",
	});
}

export default Component;
