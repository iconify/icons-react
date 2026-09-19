import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/u/ud1zwkbmp.css';
import '../../css/v/vksok0byn.css';
import '../../css/r/rbyeil6uw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXRy2Kdut"><g class="aql7dnt-u"><path class="ud1zwkbmp"/><path class="vksok0byn"/><path class="rbyeil6uw"/></g></mask></defs><path mask="url(#SVGXRy2Kdut)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nut",
	});
}

export default Component;
