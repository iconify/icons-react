import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/r1ocmpbbi.css';
import '../../css/e/epwsljzvl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGq53u6c7o"><g class="rohhhzb0l"><path class="r1ocmpbbi"/><path class="epwsljzvl"/></g></mask></defs><path mask="url(#SVGq53u6c7o)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:parallel-gateway",
	});
}

export default Component;
