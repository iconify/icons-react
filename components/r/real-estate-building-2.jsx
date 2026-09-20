import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bht69010r.css';
import '../../css/o/omuu71y8k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bht69010r"/><path class="omuu71y8k"/>`,
		"fallback": "streamline-pixel:real-estate-building-2",
	});
}

export default Component;
