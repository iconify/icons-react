import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/y8nw6jm7n.css';
import '../../css/k/k_y44mokq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNOlubAzD"><g class="rohhhzb0l"><rect class="y8nw6jm7n"/><path class="k_y44mokq"/></g></mask></defs><path mask="url(#SVGNOlubAzD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:laptop-computer",
	});
}

export default Component;
