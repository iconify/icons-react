import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8-2egbac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m8-2egbac"/>`,
		"fallback": "streamline-plump:stamp-solid",
	});
}

export default Component;
