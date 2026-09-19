import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4wngcb6p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGhOoFSdeL"><path class="e4wngcb6p"/></mask></defs><path mask="url(#SVGhOoFSdeL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:water",
	});
}

export default Component;
