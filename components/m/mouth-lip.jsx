import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9m4w261h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9m4w261h"/>`,
		"fallback": "streamline:mouth-lip",
	});
}

export default Component;
