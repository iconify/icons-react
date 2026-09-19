import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/u_u4qxbdf.css';
import '../../css/s/s_bhinboa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjjK1teKr"><g class="aql7dnt-u"><path class="u_u4qxbdf"/><path class="s_bhinboa"/></g></mask></defs><path mask="url(#SVGjjK1teKr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:round-trip",
	});
}

export default Component;
