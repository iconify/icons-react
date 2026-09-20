import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj966c6gj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pj966c6gj"/>`,
		"fallback": "streamline-plump:text-image-center-large-solid",
	});
}

export default Component;
