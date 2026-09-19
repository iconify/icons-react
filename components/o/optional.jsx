import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ubq5zrksv.css';
import '../../css/k/kp70kqvzv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGc9jDee5A"><g class="aql7dnt-u"><path class="ubq5zrksv"/><path class="kp70kqvzv"/></g></mask></defs><path mask="url(#SVGc9jDee5A)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:optional",
	});
}

export default Component;
