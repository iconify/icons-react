import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/w1b9vru5h.css';
import '../../css/f/f4kc0gbbi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlASUMbUE"><g class="rohhhzb0l"><path class="w1b9vru5h"/><path class="f4kc0gbbi"/></g></mask></defs><path mask="url(#SVGlASUMbUE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:lincoln",
	});
}

export default Component;
