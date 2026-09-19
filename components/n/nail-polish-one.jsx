import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/iqrgdmrau.css';
import '../../css/s/sokgr3bpp.css';
import '../../css/m/mspyw2bgg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdljXqdEr"><g class="aql7dnt-u"><rect class="iqrgdmrau"/><path class="sokgr3bpp"/><path class="mspyw2bgg"/></g></mask></defs><path mask="url(#SVGdljXqdEr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:nail-polish-one",
	});
}

export default Component;
