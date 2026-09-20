import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgrpdcbuo.css';
import '../../css/z/zl1t5ibdr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgrpdcbuo"/><path class="zl1t5ibdr"/>`,
		"fallback": "streamline-pixel:phone-signal-full",
	});
}

export default Component;
