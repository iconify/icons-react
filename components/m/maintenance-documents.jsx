import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr_-_c70n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr_-_c70n"/>`,
		"fallback": "ix:maintenance-documents",
	});
}

export default Component;
