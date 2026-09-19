import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iv837lbrb.css';
import '../../css/x/xx_r_sbcu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIj1pjezi"><g class="aql7dnt-u"><path class="iv837lbrb"/><path class="xx_r_sbcu"/></g></mask></defs><path mask="url(#SVGIj1pjezi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:rocking-horse",
	});
}

export default Component;
