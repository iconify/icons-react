import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcmnwab9i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcmnwab9i"/>`,
		"fallback": "picon:upload",
	});
}

export default Component;
