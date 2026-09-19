import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nis_c71-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nis_c71-d"/>`,
		"fallback": "file-icons:nvidia",
	});
}

export default Component;
