import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/nxtybr76f.css';
import '../../css/o/o1xiz1bxm.css';
import '../../css/l/l54so-d8u.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkA7M7dHM"><g class="aql7dnt-u"><path class="nxtybr76f"/><path class="o1xiz1bxm"/><path class="l54so-d8u"/></g></mask></defs><path mask="url(#SVGkA7M7dHM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:red-envelope",
	});
}

export default Component;
