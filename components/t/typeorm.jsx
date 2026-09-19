import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky_82sbmu.css';
import '../../css/o/okeacwbzk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky_82sbmu"/><path class="okeacwbzk"/>`,
		"fallback": "devicon-plain:typeorm",
	});
}

export default Component;
