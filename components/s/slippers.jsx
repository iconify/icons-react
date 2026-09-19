import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h-0rldb5a.css';
import '../../css/y/ysk9-lurp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNYJBjezk"><g class="aql7dnt-u"><path class="h-0rldb5a"/><path class="ysk9-lurp"/></g></mask></defs><path mask="url(#SVGNYJBjezk)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:slippers",
	});
}

export default Component;
