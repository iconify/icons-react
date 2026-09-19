import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/akm23jbon.css';
import '../../css/f/fwbu3rrnt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlxy0VdtO"><g class="aql7dnt-u"><path class="akm23jbon"/><path class="fwbu3rrnt"/></g></mask></defs><path mask="url(#SVGlxy0VdtO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:usb-type-c",
	});
}

export default Component;
