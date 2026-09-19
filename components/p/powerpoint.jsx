import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/q/q-vig9vwl.css';
import '../../css/s/sl781pbgn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlOyaldLm"><g class="rohhhzb0l"><rect class="h9qj9o6mz"/><path class="q-vig9vwl"/><path class="sl781pbgn"/></g></mask></defs><path mask="url(#SVGlOyaldLm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:powerpoint",
	});
}

export default Component;
