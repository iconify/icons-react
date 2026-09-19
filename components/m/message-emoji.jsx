import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wyv0j7t3c.css';
import '../../css/z/z6dtsjb3m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGi8xqVPZP"><g class="aql7dnt-u"><path class="wyv0j7t3c"/><path class="z6dtsjb3m"/></g></mask></defs><path mask="url(#SVGi8xqVPZP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:message-emoji",
	});
}

export default Component;
