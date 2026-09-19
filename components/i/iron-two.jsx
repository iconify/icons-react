import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qkde5pb7p.css';
import '../../css/d/d4eexfb9j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG91GficZD"><g class="aql7dnt-u"><path class="qkde5pb7p"/><path class="d4eexfb9j"/></g></mask></defs><path mask="url(#SVG91GficZD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:iron-two",
	});
}

export default Component;
