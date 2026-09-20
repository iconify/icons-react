import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl7fiqbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gl7fiqbzu"/>`,
		"fallback": "streamline-plump:virtual-reality-solid",
	});
}

export default Component;
