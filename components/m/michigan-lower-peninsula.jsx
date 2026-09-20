import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqy61zbey.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqy61zbey"/>`,
		"fallback": "pinhead:michigan-lower-peninsula",
	});
}

export default Component;
