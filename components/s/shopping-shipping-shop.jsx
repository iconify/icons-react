import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf8jfjdus.css';
import '../../css/l/ltdti70ft.css';
import '../../css/r/rxr9zbc9i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf8jfjdus"/><path class="ltdti70ft"/><path class="rxr9zbc9i"/>`,
		"fallback": "streamline-pixel:shopping-shipping-shop",
	});
}

export default Component;
