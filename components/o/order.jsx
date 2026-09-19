import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/hxivbubpu.css';
import '../../css/j/jgw8fgb3y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfpU5Mqnm"><g class="v3_i3wktz"><path class="hxivbubpu"/><path class="jgw8fgb3y"/></g></mask></defs><path mask="url(#SVGfpU5Mqnm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:order",
	});
}

export default Component;
