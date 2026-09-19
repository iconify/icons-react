import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wnnt2d18d.css';
import '../../css/f/flzcbdc4z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVD5AleDS"><g class="aql7dnt-u"><ellipse class="wnnt2d18d"/><path class="flzcbdc4z"/></g></mask></defs><path mask="url(#SVGVD5AleDS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:potentiometer",
	});
}

export default Component;
