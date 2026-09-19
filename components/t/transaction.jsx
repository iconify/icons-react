import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ubq5zrksv.css';
import '../../css/f/fg6trmbac.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGuiyM6d6v"><g class="aql7dnt-u"><path class="ubq5zrksv"/><path class="fg6trmbac"/></g></mask></defs><path mask="url(#SVGuiyM6d6v)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:transaction",
	});
}

export default Component;
