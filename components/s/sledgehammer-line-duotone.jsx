import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bl16oqbnl.css';
import '../../css/y/y7y8zfbel.css';
import '../../css/l/l1et1vvup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bl16oqbnl"/><path class="y7y8zfbel"/><path class="l1et1vvup"/></g>`,
		"fallback": "solar:sledgehammer-line-duotone",
	});
}

export default Component;
