import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/plbf5dbsw.css';
import '../../css/z/z7dwaybhf.css';
import '../../css/y/yhipwkb9a.css';
import '../../css/w/wu2k7qbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="plbf5dbsw"/><path class="z7dwaybhf"/><path class="yhipwkb9a"/><path class="wu2k7qbov"/></g>`,
		"fallback": "hugeicons:pan-03",
	});
}

export default Component;
