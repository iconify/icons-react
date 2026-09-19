import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyx5sbbmi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyx5sbbmi"/>`,
		"fallback": "fa7-solid:tent",
	});
}

export default Component;
