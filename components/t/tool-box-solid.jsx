import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0r9rob0y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k0r9rob0y"/>`,
		"fallback": "streamline-plump:tool-box-solid",
	});
}

export default Component;
