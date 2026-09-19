import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yfdsjrb1q.css';
import '../../css/t/twnxp1ntc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJOMcjcbP"><g class="aql7dnt-u"><path class="yfdsjrb1q"/><path class="twnxp1ntc"/></g></mask></defs><path mask="url(#SVGJOMcjcbP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:sweater",
	});
}

export default Component;
