import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz49pjc-i.css';
import '../../css/b/bkgssdbwr.css';
import '../../css/m/mmwgdwotp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz49pjc-i"/><path class="bkgssdbwr"/><path class="mmwgdwotp"/>`,
		"fallback": "solar:reorder-2-bold",
	});
}

export default Component;
