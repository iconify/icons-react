import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dnwl0o7kh.css';
import '../../css/t/t3p6ajbsy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjy7d7bhu"><g class="v3_i3wktz"><path class="dnwl0o7kh"/><path class="t3p6ajbsy"/></g></mask></defs><path mask="url(#SVGjy7d7bhu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:usb",
	});
}

export default Component;
