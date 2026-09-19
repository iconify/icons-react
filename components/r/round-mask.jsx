import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/geju8gabu.css';
import '../../css/q/qz7nj6phs.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGAfVvubCX"><g class="aql7dnt-u"><path class="geju8gabu"/><path class="qz7nj6phs"/></g></mask></defs><path mask="url(#SVGAfVvubCX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:round-mask",
	});
}

export default Component;
