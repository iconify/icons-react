import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5-g-233d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5-g-233d"/>`,
		"fallback": "nimbus:upload",
	});
}

export default Component;
