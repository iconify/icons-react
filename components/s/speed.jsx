import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mm0oaabax.css';
import '../../css/u/u_r6ezb6m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGeomlRcTD"><g class="v3_i3wktz"><path class="mm0oaabax"/><path class="u_r6ezb6m"/></g></mask></defs><path mask="url(#SVGeomlRcTD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:speed",
	});
}

export default Component;
