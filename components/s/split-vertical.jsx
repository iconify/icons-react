import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5rhi4beg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5rhi4beg"/>`,
		"fallback": "streamline:split-vertical",
	});
}

export default Component;
