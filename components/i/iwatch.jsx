import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/u_eifnz9i.css';
import '../../css/w/wnnlb85tz.css';
import '../../css/b/basw9ubgc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlEgqjbmr"><g class="rohhhzb0l"><path class="u_eifnz9i"/><path class="wnnlb85tz"/><path class="basw9ubgc"/></g></mask></defs><path mask="url(#SVGlEgqjbmr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:iwatch",
	});
}

export default Component;
