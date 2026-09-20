import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p540hcswf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p540hcswf"/>`,
		"fallback": "streamline-plump:text-box-1-solid",
	});
}

export default Component;
