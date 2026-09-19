import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k-t__0bsb.css';
import '../../css/j/j7xs0pb6x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxwjDjbnG"><g class="aql7dnt-u"><path class="k-t__0bsb"/><circle class="j7xs0pb6x"/></g></mask></defs><path mask="url(#SVGxwjDjbnG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:paragraph-round",
	});
}

export default Component;
