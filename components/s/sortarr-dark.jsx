import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7vmbpvxl.css';
import '../../css/f/flopf26xs.css';
import '../../css/g/gra5yw4ra.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="e7vmbpvxl"/><path class="flopf26xs"/><path class="gra5yw4ra"/>`,
		"fallback": "selfhst:sortarr-dark",
	});
}

export default Component;
