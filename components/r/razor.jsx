import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rjsdqzbsq.css';
import '../../css/k/kooq7hlhc.css';
import '../../css/e/e814sabwa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSrPyjbmL"><g class="aql7dnt-u"><rect class="rjsdqzbsq"/><path class="kooq7hlhc"/><path class="e814sabwa"/></g></mask></defs><path mask="url(#SVGSrPyjbmL)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:razor",
	});
}

export default Component;
