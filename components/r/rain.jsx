import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv-rcc7eh.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv-rcc7eh"/>`,
		"fallback": "wi:rain",
	});
}

export default Component;
