import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/y91dc7fgl.css';
import '../../css/f/f13g7bbsq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGf1eZDeMa"><g class="v3_i3wktz"><path class="y91dc7fgl"/><path class="f13g7bbsq"/></g></mask></defs><path mask="url(#SVGf1eZDeMa)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:thermos-cup",
	});
}

export default Component;
