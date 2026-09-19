import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xa2d9bb0k.css';
import '../../css/j/jroqwgjpq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLiEztcGW"><g class="v3_i3wktz"><path class="xa2d9bb0k"/><path class="jroqwgjpq"/></g></mask></defs><path mask="url(#SVGLiEztcGW)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:music",
	});
}

export default Component;
