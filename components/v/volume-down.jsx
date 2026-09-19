import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/s/sl82esoas.css';
import '../../css/p/pflujq7cq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnPpte9rF"><g class="v3_i3wktz"><path class="sl82esoas"/><path class="pflujq7cq"/></g></mask></defs><path mask="url(#SVGnPpte9rF)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:volume-down",
	});
}

export default Component;
