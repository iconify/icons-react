import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngp3jeu8h.css';
import '../../css/i/ixkzetvqb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngp3jeu8h"/><path class="ixkzetvqb"/>`,
		"fallback": "ion:ios-cloud-download",
	});
}

export default Component;
