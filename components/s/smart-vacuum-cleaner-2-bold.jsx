import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0cyhdctz.css';
import '../../css/n/nda3cdcdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0cyhdctz"/><path clip-rule="evenodd" class="nda3cdcdm"/>`,
		"fallback": "solar:smart-vacuum-cleaner-2-bold",
	});
}

export default Component;
