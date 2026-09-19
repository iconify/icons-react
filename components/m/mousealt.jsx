import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnixz-bbz.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnixz-bbz"/>`,
		"fallback": "whh:mousealt",
	});
}

export default Component;
