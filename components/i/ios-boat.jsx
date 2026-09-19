import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_k7_fb0a.css';
import '../../css/h/hrwuikbxl.css';
import '../../css/o/olalq2vor.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_k7_fb0a"/><path class="hrwuikbxl"/><path class="olalq2vor"/>`,
		"fallback": "ion:ios-boat",
	});
}

export default Component;
