import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yez-whi-k.css';
import '../../css/j/jv0enia0k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGjNNF8KOa"><g class="aql7dnt-u"><path class="yez-whi-k"/><path class="jv0enia0k"/></g></mask></defs><path mask="url(#SVGjNNF8KOa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nine-points-connected",
	});
}

export default Component;
