import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/b8tqzsb4n.css';
import '../../css/z/zsvlx-b6c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtC5EwcvX"><g class="aql7dnt-u"><path class="b8tqzsb4n"/><path class="zsvlx-b6c"/></g></mask></defs><path mask="url(#SVGtC5EwcvX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:voice-input",
	});
}

export default Component;
