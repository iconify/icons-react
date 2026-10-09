import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cves0rbaa.css';
import '../../css/n/na5i4bcyj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cves0rbaa"/><path class="na5i4bcyj"/>`,
		"fallback": "energy-icons:palette-20",
	});
}

export default Component;
