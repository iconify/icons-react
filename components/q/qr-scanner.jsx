import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpkla4bye.css';
import '../../css/l/lvwmqz7ny.css';
import '../../css/o/otefzfpii.css';
import '../../css/d/dy1rfcq1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpkla4bye"/><path class="lvwmqz7ny"/><path class="otefzfpii"/><path class="dy1rfcq1t"/>`,
		"fallback": "ion:qr-scanner",
	});
}

export default Component;
