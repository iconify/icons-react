import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/e/e9vhvzbmu.css';
import '../../css/l/ld8emebna.css';
import '../../css/y/y0nz_jbwv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfWYD4dij"><g class="aql7dnt-u"><path class="e9vhvzbmu"/><path class="ld8emebna"/><rect class="y0nz_jbwv"/></g></mask></defs><path mask="url(#SVGfWYD4dij)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:shovel",
	});
}

export default Component;
