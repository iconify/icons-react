import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ey_kr2fcq.css';
import '../../css/f/f8js4o8ms.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ey_kr2fcq"/><path class="f8js4o8ms"/>`,
		"fallback": "ion:train-sharp",
	});
}

export default Component;
