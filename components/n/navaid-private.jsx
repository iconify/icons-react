import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsssgjbla.css';
import '../../css/s/svdy80z7e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsssgjbla"/><path class="svdy80z7e"/>`,
		"fallback": "carbon:navaid-private",
	});
}

export default Component;
