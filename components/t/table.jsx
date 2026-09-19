import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dzhl58nwn.css';
import '../../css/w/wk8bg5zve.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLQsOGbhf"><g class="aql7dnt-u"><rect class="dzhl58nwn"/><path class="wk8bg5zve"/></g></mask></defs><path mask="url(#SVGLQsOGbhf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:table",
	});
}

export default Component;
