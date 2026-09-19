import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/uf7sxplet.css';
import '../../css/k/kqdujgb2y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHMJDneYK"><g class="aql7dnt-u"><path class="uf7sxplet"/><path class="kqdujgb2y"/></g></mask></defs><path mask="url(#SVGHMJDneYK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:usb-memory-stick",
	});
}

export default Component;
