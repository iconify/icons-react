import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h-0rldb5a.css';
import '../../css/c/ce8_xpbon.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJzhzobbE"><g class="aql7dnt-u"><path class="h-0rldb5a"/><path class="ce8_xpbon"/></g></mask></defs><path mask="url(#SVGJzhzobbE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:slippers-one",
	});
}

export default Component;
