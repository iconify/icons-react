import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asnmq375y.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asnmq375y"/>`,
		"fallback": "foundation:results",
	});
}

export default Component;
