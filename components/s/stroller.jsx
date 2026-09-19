import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsblh3ttn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsblh3ttn"/>`,
		"fallback": "whh:stroller",
	});
}

export default Component;
