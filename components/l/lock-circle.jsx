import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swz4mknri.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swz4mknri"/>`,
		"fallback": "f7:lock-circle",
	});
}

export default Component;
