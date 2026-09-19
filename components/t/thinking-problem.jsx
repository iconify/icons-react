import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h6karfbzd.css';
import '../../css/r/rs6xfdeqy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGP2l5AdEm"><g class="aql7dnt-u"><path class="h6karfbzd"/><path class="rs6xfdeqy"/></g></mask></defs><path mask="url(#SVGP2l5AdEm)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:thinking-problem",
	});
}

export default Component;
