import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qbeye2b4p.css';
import '../../css/k/knna4p-xd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG08JqIcmp"><g class="aql7dnt-u"><path class="qbeye2b4p"/><path class="knna4p-xd"/></g></mask></defs><path mask="url(#SVG08JqIcmp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:popcorn",
	});
}

export default Component;
