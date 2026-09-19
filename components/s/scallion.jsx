import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/ip3i1kbac.css';
import '../../css/y/y9le7cbpd.css';
import '../../css/w/wojuw_vqb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGekO9JeGR"><g class="aql7dnt-u"><path class="ip3i1kbac"/><path class="y9le7cbpd"/><path class="wojuw_vqb"/></g></mask></defs><path mask="url(#SVGekO9JeGR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:scallion",
	});
}

export default Component;
