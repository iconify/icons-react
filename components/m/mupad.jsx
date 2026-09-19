import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp_hivq3s.css';

const viewBox = {"width":494,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp_hivq3s"/>`,
		"fallback": "file-icons:mupad",
	});
}

export default Component;
