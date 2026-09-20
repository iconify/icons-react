import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxl2eck4h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxl2eck4h"/>`,
		"fallback": "streamline-plump:stock",
	});
}

export default Component;
