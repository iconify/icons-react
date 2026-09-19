import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/y67gvgx0g.css';
import '../../css/k/kga2531pz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZqFERqrk"><g class="aql7dnt-u"><path class="y67gvgx0g"/><path class="kga2531pz"/></g></mask></defs><path mask="url(#SVGZqFERqrk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:manual-gear",
	});
}

export default Component;
