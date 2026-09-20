import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf8ho-irp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf8ho-irp"/>`,
		"fallback": "teenyicons:keyboard-outline",
	});
}

export default Component;
