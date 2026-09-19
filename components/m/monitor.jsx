import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bv4586n5c.css';
import '../../css/s/sqpivhksc.css';
import '../../css/k/kivyvktmd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGn7lS4UgA"><g class="v3_i3wktz"><path class="bv4586n5c"/><path clip-rule="evenodd" class="sqpivhksc"/><path class="kivyvktmd"/></g></mask></defs><path mask="url(#SVGn7lS4UgA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:monitor",
	});
}

export default Component;
