import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nquh0ubfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nquh0ubfz"/>`,
		"fallback": "streamline-plump:round-anchor-point-solid",
	});
}

export default Component;
