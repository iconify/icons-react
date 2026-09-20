import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xza0rac-q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xza0rac-q"/>`,
		"fallback": "teenyicons:qr-code-outline",
	});
}

export default Component;
