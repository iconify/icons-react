import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcea63bav.css';
import '../../css/r/rtjb2ejcv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcea63bav"/><path class="rtjb2ejcv"/>`,
		"fallback": "energy-icons:phase-shifter-20-bold",
	});
}

export default Component;
