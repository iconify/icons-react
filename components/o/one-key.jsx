import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/k/k1ji6-3eq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVHlBKdjS"><g class="aql7dnt-u"><rect class="h9qj9o6mz"/><path class="k1ji6-3eq"/></g></mask></defs><path mask="url(#SVGVHlBKdjS)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:one-key",
	});
}

export default Component;
