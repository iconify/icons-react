import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qrymgbcbz.css';
import '../../css/o/otz57pxwg.css';
import '../../css/k/krtelgb7b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMlZleJHc"><g class="aql7dnt-u"><path class="qrymgbcbz"/><path class="otz57pxwg"/><path class="krtelgb7b"/></g></mask></defs><path mask="url(#SVGMlZleJHc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:laptop",
	});
}

export default Component;
