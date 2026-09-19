import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw8wlft0n.css';

const viewBox = {"width":1026,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw8wlft0n"/>`,
		"fallback": "whh:pigpenv",
	});
}

export default Component;
