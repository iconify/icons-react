import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/fei-hofsh.css';
import '../../css/m/mx_utlb0u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnvP0OXPd"><g class="aql7dnt-u"><path class="fei-hofsh"/><path class="mx_utlb0u"/></g></mask></defs><path mask="url(#SVGnvP0OXPd)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:six-points",
	});
}

export default Component;
