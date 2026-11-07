import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrxlgg64z.css';
import '../../css/p/pwgp6wb0l.css';
import '../../css/g/gw5xq8brv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="hrxlgg64z"/><path class="pwgp6wb0l"/><path class="gw5xq8brv"/>`,
		"fallback": "solar:refresh-circle-bold-duotone",
	});
}

export default Component;
