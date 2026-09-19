import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmg89kv6p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmg89kv6p"/>`,
		"fallback": "et:refresh",
	});
}

export default Component;
