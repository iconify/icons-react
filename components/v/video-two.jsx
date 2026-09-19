import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/z/zay1jacum.css';
import '../../css/n/no-fr54cz.css';
import '../../css/x/x0x2libsd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGEJjvfn0J"><g class="aql7dnt-u"><path class="zay1jacum"/><path class="no-fr54cz"/><path class="x0x2libsd"/></g></mask></defs><path mask="url(#SVGEJjvfn0J)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:video-two",
	});
}

export default Component;
