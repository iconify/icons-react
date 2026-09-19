import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qkde5pb7p.css';
import '../../css/g/gw4vjob_t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGw0dMjA1j"><g class="aql7dnt-u"><path class="qkde5pb7p"/><path class="gw4vjob_t"/></g></mask></defs><path mask="url(#SVGw0dMjA1j)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:iron-three",
	});
}

export default Component;
