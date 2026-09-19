import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsypm3bfl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqWfAeCxt"><path class="qsypm3bfl"/></mask></defs><path mask="url(#SVGqWfAeCxt)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:panorama-horizontal",
	});
}

export default Component;
