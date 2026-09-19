import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/l44v9bgvv.css';
import '../../css/c/c4ntg5ecs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJAkoWcDZ"><g class="aql7dnt-u"><path class="l44v9bgvv"/><path class="c4ntg5ecs"/></g></mask></defs><path mask="url(#SVGJAkoWcDZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:move",
	});
}

export default Component;
