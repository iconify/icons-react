import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/i72f4jbac.css';
import '../../css/s/sqmt6kqof.css';
import '../../css/s/sfy1x5b8o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG39R8uT2v"><g class="aql7dnt-u"><path class="i72f4jbac"/><path class="sqmt6kqof"/><path class="sfy1x5b8o"/></g></mask></defs><path mask="url(#SVG39R8uT2v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lipstick",
	});
}

export default Component;
