import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/m/mexu1qk7n.css';
import '../../css/b/b56omhbpq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7hQFudhn"><g class="aql7dnt-u"><rect class="mexu1qk7n"/><path class="b56omhbpq"/></g></mask></defs><path mask="url(#SVG7hQFudhn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:left-expand",
	});
}

export default Component;
