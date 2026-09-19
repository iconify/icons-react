import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/yahvtwbpp.css';
import '../../css/w/w-bu9e3ii.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGu2YsNdIu"><g class="v3_i3wktz"><rect class="yahvtwbpp"/><path class="w-bu9e3ii"/></g></mask></defs><path mask="url(#SVGu2YsNdIu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:transaction-order",
	});
}

export default Component;
