import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw_s9xb-r.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw_s9xb-r"/>`,
		"fallback": "whh:volumedown",
	});
}

export default Component;
