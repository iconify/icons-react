import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/vj61-6bpt.css';
import '../../css/r/rl87tlb2e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGVV02udhX"><g class="aql7dnt-u"><path class="vj61-6bpt"/><path class="rl87tlb2e"/></g></mask></defs><path mask="url(#SVGVV02udhX)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:love-and-help",
	});
}

export default Component;
