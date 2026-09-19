import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/p/pfnw24b8z.css';
import '../../css/b/bjd584byl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9wDgcdeE"><g class="v3_i3wktz"><rect class="pfnw24b8z"/><path class="bjd584byl"/></g></mask></defs><path mask="url(#SVG9wDgcdeE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:refrigerator",
	});
}

export default Component;
