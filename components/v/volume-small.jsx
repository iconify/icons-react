import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sl82esoas.css';
import '../../css/c/cchyt3b-e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGV6DRCc9a"><g class="v3_i3wktz"><path class="sl82esoas"/><path class="cchyt3b-e"/></g></mask></defs><path mask="url(#SVGV6DRCc9a)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:volume-small",
	});
}

export default Component;
